package com.mangasite.services;

import static com.mongodb.client.model.changestream.OperationType.DELETE;
import static reactor.core.scheduler.Schedulers.boundedElastic;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;
import javax.annotation.PostConstruct;
import org.springframework.data.mongodb.core.ChangeStreamEvent;
import org.springframework.data.mongodb.core.ChangeStreamOptions;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.stereotype.Service;
import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mangasite.domain.requests.MangaChangeRequest;
import com.mangasite.helper.SavedData;
import com.mangasite.repos.ChapterRepo;
import com.mangasite.repos.MangaRepo;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.function.TupleUtils;
import reactor.util.function.Tuples;

/**
 * Service class that handles all CRUD operations
 *
 * @author Josiah
 */
@Service
@RequiredArgsConstructor
public class MangaService {

  private final AtomicInteger activeConnections;
  private final MangaRepo repo;
  private final ChapterRepo chapterRepo;
  private final ReactiveMongoTemplate reactiveMongoTemplate;
  private final SavedData savedData;

  Set<Integer> iDSet = new HashSet<>();

  @PostConstruct
  private void watchDB() {
    this.watchDBChanges(true).subscribe();
  }
  // Get Methods
  /**
   * Gets all Manga stored in the SavedData class
   *
   * @return A Flux containing all saved manga
   * @throws InterruptedException
   */
  public Flux<Manga> findAll() {

    return !savedData.getSavedList().isEmpty()
        ? Flux.fromIterable(savedData.getSavedList())
        : savedData.getMulticastMangaListFlux();
  }

  /**
   * Gets all Manga stored in the SavedData class
   *
   * @param id the RealID of the desired manga
   * @return A Mono that resolves into the requested Manga
   */
  public Mono<Manga> findManga(int id) {

    return repo.getByRealID(id);
  }

  /**
   * Gets all popular manga from the SavedData class
   *
   * @return A Flux that resolves into the list of popular manga
   */
  public Flux<Manga> findPopular() {

    return savedData.getPopularManga();
  }

  /**
   * Gets all recently updated manga from the SavedData class
   *
   * @return A Flux that resolves into the list of recently updated manga
   */
  public Flux<Manga> findLatest() {

    return savedData.getRecentManga();
  }

  /**
   * This method updates existing manga with new chapters <br>
   * <br>
   * It first calls the manga api to build a post flux that resolves into a list of enriched manga
   * <br>
   * then subscribes to that flux to start the post operations and update the mongo Database
   */
  public Mono<Manga> postNewManga(MangaChangeRequest request) {

    savedData.awaitLatch();
    System.out.println("Populating Database");

    return Mono.just(request)
        .map(Manga::new)
        .map(
            m -> {
              m.setRealID(setID());
              return m;
            })
        .filter(
            listManga ->
                savedData.getSavedList().stream().noneMatch(m -> listManga.getA().equals(m.getA())))
        .map(
            manga ->
                Tuples.of(
                    manga,
                    new MangaChapters(
                        manga.getT(),
                        manga.getRealID(),
                        request.getFirstChapterIndex(),
                        request.getFirstPageURL())))
        .flatMap(
            TupleUtils.function(
                (manga, chapter) ->
                    repo.insert(manga).zipWith(chapterRepo.insert(chapter), (m, c) -> m)))
        .doOnNext(s -> System.out.println("Saved " + s.getT() + " RealID: " + s.getRealID()))
        .doOnNext(savedData::addToList);
  }

  public Flux<Manga> watchDBChanges(boolean isServer) {
    // set changestream options to watch for any changes to the manga collection
    final var options = ChangeStreamOptions.builder().returnFullDocumentOnUpdate().build();

    // return a flux that watches the changestream and returns the full document
    return reactiveMongoTemplate
        .changeStream("Manga", options, Manga.class)
        .filter(e -> !isServer||activeConnections.intValue() < 1  )
        .doOnSubscribe(s -> System.out.println("Watching Mongo Change Stream"))
        .doOnNext(
            event -> {
              final var changedManga = event.getBody();
              final var operation = event.getOperationType();


              switch (operation) {
                case DELETE ->  savedData.refreshCache();

                case INSERT -> operation.getValue();

                default ->
                savedData.updateList(List.of(changedManga));
              }

              if (changedManga != null)
                System.out.println(
                    "Operation "
                        + operation.getValue()
                        + " Performed on Manga: "
                        + changedManga.getT());
            })
        .filter(e -> !e.getOperationType().equals(DELETE))
        .map(ChangeStreamEvent::getBody)
        .onErrorContinue(
            (ex, o) -> System.err.println("Error processing " + o + "Exception is " + ex));
  }

  Flux<Manga> mangaToBeDeleted = Flux.empty();
  Flux<MangaChapters> chaptersToBeDeleted = Flux.empty();

  /**
   * This method deletes manga with less chapters than the given number <br>
   * <br>
   * <br>
   * Use when database space becomes a concern.
   *
   * @param mangaFlux a flux that resolves into a list of new manga
   * @param numberOfChapters the minimum amount of chapters a manga should have to prevent deletion
   */
  // Delete Method
  public void deleteByChapter(int numberOfChapters) {

    final Flux<Manga> mangaflux =
        savedData.getSavedList() != null
            ? Flux.fromIterable(savedData.getSavedList())
            : savedData.getMulticastMangaListFlux();

    mangaflux
        .filter(
            manga ->
                manga.getRealID() < 0 || manga.getInfo().getChapters().size() <= numberOfChapters)
        .doOnComplete(
            () -> {
              mangaToBeDeleted
                  .collectList()
                  .subscribe(
                      dedManga -> {
                        System.out.println("Total deleted manga " + dedManga.size());
                        repo.deleteAll(dedManga).subscribe();
                        savedData.getSavedList().removeAll(dedManga);
                      });
              chaptersToBeDeleted
                  .collectList()
                  .subscribe(dedChapters -> chapterRepo.deleteAll(dedChapters).subscribe());
            })
        .subscribe(
            dedManga -> {
              if (dedManga.getA() == null)
                mangaToBeDeleted =
                    mangaToBeDeleted.concatWith(repo.getByRealID(dedManga.getRealID()));
              else {
                System.out.println("\n Deleting " + dedManga.getA());
                chaptersToBeDeleted =
                    chaptersToBeDeleted.concatWith(chapterRepo.getByMangaName(dedManga.getT()));

                mangaToBeDeleted = mangaToBeDeleted.concatWith(repo.getBya(dedManga.getA()));
              }
            });
  }

  /**
   * Deletes duplicate manga in the database using a hashset. <br>
   * <br>
   * Use when you detect too many duplicates to resolve by hand.
   */
  public void deleteDups() {

    final Flux<Manga> mangaflux =
        savedData.getSavedList() != null
            ? Flux.fromIterable(savedData.getSavedList())
            : savedData.getMulticastMangaListFlux();

    System.out.println("Deleting Manga Dups");
    final Set<String> mangaSet = new HashSet<>();
    final Set<String> chapterSet = new HashSet<>();

    mangaflux.subscribe(
        m -> {
          if (!mangaSet.add(m.getA())) {
            System.out.println("Deleted " + m.getA());

            repo.delete(m).subscribe();
          }
        });

    System.out.println("Deleting Chapter Dups");

    chapterRepo
        .findAll()
        .subscribeOn(boundedElastic())
        .subscribe(
            chapter -> {
              if (chapter.getMangaName() == null || !chapterSet.add(chapter.getMangaName())) {
                System.out.println("Manga " + chapter.getRealID() + " Deleted ");
                // run mongo delete c
                chapterRepo.delete(chapter).subscribe();
              }
            });
  }

  /**
   * Fixes manga ID in the case of accidental sharing of the same ID. <br>
   * <br>
   * Use when you detect too many to resolve by hand.
   */
  public void fixDuplicateIDs() {

    final Flux<Manga> mangaflux =
        savedData.getSavedList() != null
            ? Flux.fromIterable(savedData.getSavedList())
            : savedData.getMulticastMangaListFlux();

    final Set<Integer> idSet = new HashSet<>();

    mangaflux
        .filter(manga -> manga.getRealID() > 0)
        .subscribe(
            manga -> {
              if (!idSet.add(manga.getRealID())) {
                final int id = manga.getRealID();
                System.out.println("Duplicate ID " + id + " for " + manga.getA());
                final int newId = setID();
                System.out.println("new ID " + newId);
                manga.setRealID(newId);
                repo.save(manga).subscribe();
                chapterRepo
                    .getDupsByRealID(id)
                    .filter(c -> c.getMangaName().equals(manga.getT()))
                    .subscribe(
                        chapters -> {
                          chapters.setRealID(newId);
                          chapterRepo.save(chapters).subscribe();
                        });
              }
            });
  }

  public int setID() {

    int id = 0;
    Optional<Manga> manga;
    do {
      final int ID = id;
      manga = savedData.getSavedList().stream().filter(m -> m.getRealID() == ID).findAny();

      if (manga.isPresent() || !iDSet.add(id)) {
        iDSet.add(id);
        id++;
      } else {
        iDSet.add(id);
        break;
      }

    } while (true);

    return id;
  }
}
