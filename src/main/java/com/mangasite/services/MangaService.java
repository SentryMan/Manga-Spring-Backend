package com.mangasite.services;

import static com.mangasite.domain.Constants.FULL_DOC;
import static java.util.Comparator.comparingInt;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.data.mongodb.core.ChangeStreamEvent;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.stereotype.Service;

import com.mangasite.domain.Manga;
import com.mangasite.repo.MangaRepo;

import reactor.cache.CacheFlux;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Signal;

/**
 * Service class that handles all CRUD operations
 *
 * @author Josiah
 */
@Service
public class MangaService {

  private final MangaRepo repo;
  private final ReactiveMongoTemplate reactiveMongoTemplate;
  private final List<Manga> popularCache = new ArrayList<>();

  public MangaService(MangaRepo repo, ReactiveMongoTemplate reactiveMongoTemplate) {
    this.repo = repo;
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
                Mono.just(popularCache.stream().map(Signal::next).toList())
                    .filter(Predicate.not(List::isEmpty)),
            "")
        .onCacheMissResume(
            repo.sample(7)
                .filter(m -> m.getId() != 3 && m.getId() != 4)
                .take(5)
                .sort(comparingInt(Manga::getH).reversed()))
        .andWriteWith(
            (k, signals) ->
                Mono.fromRunnable(
                    () -> {
                      popularCache.clear();

                      signals.stream()
                          .filter(Signal::hasValue)
                          .map(Signal::get)
                          .forEach(popularCache::add);
                    }));
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
        .mapNotNull(ChangeStreamEvent::getBody)
        .onErrorContinue(
            (ex, o) -> {
              System.err.println("Error processing " + o + " Exception is " + ex);
              ex.printStackTrace();
            });
  }
}
