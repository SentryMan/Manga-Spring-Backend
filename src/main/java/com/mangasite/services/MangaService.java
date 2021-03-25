package com.mangasite.services;

import static com.mongodb.client.model.changestream.OperationType.DELETE;
import static reactor.core.scheduler.Schedulers.boundedElastic;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.ChangeStreamEvent;
import org.springframework.data.mongodb.core.ChangeStreamOptions;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.stereotype.Service;
import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mangasite.domain.requests.MangaChangeRequest;
import com.mangasite.repo.ChapterRepo;
import com.mangasite.repo.MangaRepo;
import com.mongodb.client.model.changestream.ChangeStreamDocument;
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
public class MangaService {

  @Value("${popular.manga}")
  String[] popularMangaAlias;

  private final AtomicInteger activeConnections;
  private final MangaRepo repo;
  private final ChapterRepo chapterRepo;
  private final ReactiveMongoTemplate reactiveMongoTemplate;

  public MangaService(
      AtomicInteger activeConnections,
      MangaRepo repo,
      ChapterRepo chapterRepo,
      ReactiveMongoTemplate reactiveMongoTemplate) {
    this.activeConnections = activeConnections;
    this.repo = repo;
    this.chapterRepo = chapterRepo;
    this.reactiveMongoTemplate = reactiveMongoTemplate;
  }

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

    return repo.findAll();
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

    Flux<Manga> popularMangaFlux = Flux.empty();
    for (final String alias : popularMangaAlias)
      popularMangaFlux = popularMangaFlux.concatWith(repo.getBya(alias));

    return popularMangaFlux;
  }

  /**
   * Gets all recently updated manga from the SavedData class
   *
   * @return A Flux that resolves into the list of recently updated manga
   */
  public Flux<Manga> findLatest() {

    return repo.findByLd(new Date().getTime() / 1000 - 604800, new Date().getTime() / 1000);
  }

  /**
   * This method updates existing manga with new chapters <br>
   * <br>
   * It first calls the manga api to build a post flux that resolves into a list of enriched manga
   * <br>
   * then subscribes to that flux to start the post operations and update the mongo Database
   */
  public Mono<Manga> postNewManga(MangaChangeRequest request) {

    System.out.println("Populating Database");

    return repo.getBya(request.getAlias())
        .hasElement()
        .flatMap(b -> b ? Mono.empty() : Mono.just(request))
        .map(Manga::new)
        .zipWith(generateID())
        .map(
            TupleUtils.function(
                (m, id) -> {
                  m.setRealID(id);
                  return m;
                }))
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
        .doOnNext(s -> System.out.println("Saved " + s.getT() + " RealID: " + s.getRealID()));
  }

  /**
   * Creates a Flux that watches the mongo change stream and returns updated manga;
   *
   * @return Mongo ChangeStream Flux
   */
  public Flux<Manga> watchDBChanges(boolean isServer) {
    final var fulldocOption = ChangeStreamOptions.builder().returnFullDocumentOnUpdate().build();

    return reactiveMongoTemplate
        .changeStream("Manga", fulldocOption, Manga.class)
        .filter(e -> !isServer || activeConnections.intValue() < 1)
        .doOnSubscribe(s -> System.out.println("Watching Mongo Change Stream"))
        .doOnNext(
            event -> {
              final var changedManga = event.getBody();
              final var operation = event.getOperationType();

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
            (ex, o) -> {
              System.err.println("Error processing " + o + " Exception is " + ex);
              ex.printStackTrace();
            });
  }

  ChangeStreamDocument c = null;
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

    final Flux<Manga> mangaflux = repo.findAll();

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

    final Flux<Manga> mangaflux = repo.findAll();

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

    final Flux<Manga> mangaflux = repo.findAll();

    final Set<Integer> idSet = new HashSet<>();

    mangaflux
        .filter(manga -> manga.getRealID() > 0)
        .flatMap(
            manga -> {
              if (idSet.add(manga.getRealID())) return Mono.empty();
              final int id = manga.getRealID();
              return generateID()
                  .doOnNext(
                      newId -> {
                        System.out.println("Duplicate ID " + id + " for " + manga.getA());

                        System.out.println("new ID " + newId);
                      })
                  .flatMap(
                      newId -> {
                        manga.setRealID(newId);
                        var chapterUpdateMono =
                            chapterRepo
                                .getDupsByRealID(id)
                                .filter(c -> c.getMangaName().equals(manga.getT()))
                                .flatMap(
                                    chapters -> {
                                      chapters.setRealID(newId);
                                      return chapterRepo.save(chapters);
                                    })
                                .then();
                        return repo.save(manga).zipWith(chapterUpdateMono);
                      });
            });
  }

  public Mono<Integer> generateID() {
    Set<Integer> iDSet = new HashSet<>();

    return repo.findAll()
        .collectList()
        .map(
            list -> {
              int id = 0;
              do {
                final int ID = id;
                final var manga = list.stream().filter(m -> m.getRealID() == ID).findAny();

                if (!manga.isPresent() && iDSet.add(id)) {
                  iDSet.add(id);
                  break;
                }
                iDSet.add(id);
                id++;

              } while (true);

              return id;
            });
  }
}
