package com.mangasite.services;

import static com.mangasite.domain.Constants.FULL_DOC;
import static com.mongodb.client.model.changestream.OperationType.DELETE;
import static reactor.function.TupleUtils.function;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.chrono.ChronoZonedDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.function.Predicate;

import org.springframework.data.mongodb.core.ChangeStreamEvent;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.stereotype.Service;

import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mangasite.record.MangaChangeRequest;
import com.mangasite.repo.ChapterRepo;
import com.mangasite.repo.MangaRepo;

import reactor.cache.CacheFlux;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Signal;
import reactor.util.function.Tuples;

/**
 * Service class that handles all CRUD operations
 *
 * @author Josiah
 */
@Service
public class MangaService {

  private final MangaRepo repo;
  private final ChapterRepo chapterRepo;
  private final ReactiveMongoTemplate reactiveMongoTemplate;
  private final List<Manga> popularCache = new ArrayList<>();

  public MangaService(
      MangaRepo repo, ChapterRepo chapterRepo, ReactiveMongoTemplate reactiveMongoTemplate) {
    this.repo = repo;
    this.chapterRepo = chapterRepo;
    this.reactiveMongoTemplate = reactiveMongoTemplate;
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
   * @param id the id of the desired manga
   * @return A Mono that resolves into the requested Manga
   */
  public Mono<Manga> findManga(int id) {

    return repo.findById(id);
  }

  /**
   * Gets all popular manga from cache. or else sample from DB
   *
   * @return A Flux that resolves into the list of popular manga
   */
  public Flux<Manga> findPopular() {

    return CacheFlux.lookup(
            k ->
                Flux.fromIterable(popularCache)
                    .map(Signal::next)
                    .collectList()
                    .filter(Predicate.not(List::isEmpty)),
            "")
        .onCacheMissResume(
            repo.sample(7)
                .filter(m -> m.getId() != 3 && m.getId() != 4)
                .take(5)
                .sort(Comparator.comparingInt(Manga::getH)))
        .andWriteWith(
            (k, signals) ->
                Mono.fromRunnable(
                    () -> {
                      popularCache.clear();

                      signals
                          .stream()
                          .filter(Signal::hasValue)
                          .map(Signal::get)
                          .forEach(popularCache::add);
                    }))
        .take(5);
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

    repo.getByt(request.title())
        .hasElement()
        .flatMap(b -> b ? Mono.empty() : Mono.just(request))
        .map(Manga::new)
        .zipWith(generateID())
        .map(
            function(
                (m, id) -> {
                  m.setId(id);
                  return m;
                }))
        .map(
            manga ->
                Tuples.of(
                        manga,
                        new MangaChapters(
                            manga.getId(),
                            manga.getT(),
                            request.firstChapterIndex(),
                            request.firstPageURL()))
                    .mapT1(repo::insert)
                    .mapT2(chapterRepo::insert))
        .flatMap(function((manga, chapter) -> manga.zipWith(chapter, (m, c) -> m)))
        .doOnNext(s -> System.out.println("Saved " + s.getT() + " ID: " + s.getId()));

    return null;
  }

  /**
   * Creates a Flux that watches the mongo change stream and returns updated manga;
   *
   * @return Mongo ChangeStream Flux
   */
  public Flux<Manga> watchDBChanges() {

    return reactiveMongoTemplate
        .changeStream("Manga", FULL_DOC, Manga.class)
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
        .filter(e -> !DELETE.equals(e.getOperationType()))
        .map(ChangeStreamEvent::getBody)
        .onErrorContinue(
            (ex, o) -> {
              System.err.println("Error processing " + o + " Exception is " + ex);
              ex.printStackTrace();
            });
  }

  public Mono<Manga> updateLD(Integer id, Optional<String> dateParam) {

    final var epochSeconds =
        dateParam
            .map(s -> LocalDate.parse(s).atStartOfDay(ZoneId.systemDefault()))
            .map(ChronoZonedDateTime::toEpochSecond)
            .orElse(Instant.now().getEpochSecond());

    return repo.findById(id).doOnNext(m -> m.setLd(epochSeconds)).flatMap(repo::save);
  }

  public void patchRank(int id, int newRank) {

    repo.findAll()
        .doOnNext(
            m -> {
              if (m.getId() == id) m.setH(newRank);
            })
        .sort(Comparator.comparingInt(Manga::getH))
        .collectList()
        .flatMapIterable(
            l -> {
              Manga previous = l.stream().filter(m -> m.getId() == id).findFirst().get();
              for (int i = 0; i < l.size(); i++) {
                final var curr = l.get(i);
                if (curr.getId() == id || curr.getH() < newRank) continue;
                if (previous != null && previous.getH() >= curr.getH())
                  curr.setH(previous.getH() + 1);

                previous = curr;
              }

              return l;
            })
        .transform(repo::saveAll)
        .doOnError(Throwable::printStackTrace)
        .subscribe();
  }

  public void patchChapterNames(int id, Map<String, String> nameMap) {

    repo.findById(id)
        .map(
            m -> {
              final var info = m.getInfo();
              final var chapters = info.getChapters();
              nameMap.forEach(
                  (k, v) -> {
                    chapters.stream().filter(l -> k.equals(l.get(0))).forEach(l -> l.set(2, v));
                  });
              info.setChapters(chapters);
              m.setInfo(info);

              return m;
            })
        .flatMap(repo::save)
        .subscribe(m -> System.out.println("Updated Chapter Names for Manga: " + m.getT()));
  }

  public Mono<Integer> generateID() {
    final Set<Integer> idSet = new HashSet<>();

    return repo.findAll()
        .collectList()
        .map(
            list -> {
              var id = 0;
              do {
                final var ID = id;
                final var idNotTaken = list.stream().noneMatch(m -> m.getId() == ID);

                if (idNotTaken && idSet.add(id)) break;

                id++;

              } while (true);

              return id;
            });
  }
}
