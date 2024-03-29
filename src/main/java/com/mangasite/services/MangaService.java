package com.mangasite.services;

import static java.util.Comparator.comparingInt;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import com.mangasite.domain.Manga;
import com.mangasite.repo.MangaRepo;
import com.mongodb.client.model.changestream.ChangeStreamDocument;

import io.avaje.inject.PostConstruct;
import io.avaje.inject.PreDestroy;
import jakarta.inject.Singleton;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service class that handles all CRUD operations
 *
 * @author Josiah
 */
@Singleton
public class MangaService {

  private final MangaRepo repo;
  private final List<Manga> popularCache = new ArrayList<>(5);

  private final ScheduledExecutorService cacheClearExecutor =
      Executors.newSingleThreadScheduledExecutor(
          Thread.ofVirtual().name("Virtual Cache Clearer").factory());

  public MangaService(MangaRepo repo) {
    this.repo = repo;
  }

  @PostConstruct
  void startCacheClear() {
    cacheClearExecutor.scheduleAtFixedRate(popularCache::clear, 0, 30, TimeUnit.MINUTES);
  }

  @PreDestroy
  void shutdownExecutor() {
    cacheClearExecutor.shutdownNow();
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

    if (popularCache.isEmpty())
      return repo.sample(7)
          .filter(m -> m.getId() != 3 && m.getId() != 4)
          .take(5)
          .sort(comparingInt(Manga::getH).reversed())
          .doOnNext(popularCache::add);

    return Flux.fromIterable(popularCache);
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

    return repo.changeStream(Manga.class)
        .doOnNext(
            event -> {
              final var changedManga = event.getFullDocument();
              final var operation = event.getOperationType();
              if (changedManga != null)
                System.out.println(
                    "Operation "
                        + operation.getValue()
                        + " Performed on Manga: "
                        + changedManga.getT());
            })
        .mapNotNull(ChangeStreamDocument::getFullDocument)
        .onErrorContinue(
            (ex, o) -> {
              System.err.println("Error processing " + o + " Exception is " + ex);
              ex.printStackTrace();
            });
  }
}
