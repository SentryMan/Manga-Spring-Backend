package com.mangasite.services;

import static com.mangasite.domain.Constants.VIRTUAL_SCHEDULER;
import static java.util.Comparator.comparingInt;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.mangasite.domain.Manga;
import com.mangasite.repo.MangaRepo;
import com.mongodb.client.model.changestream.ChangeStreamDocument;

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
  private final List<Manga> popularCache = new ArrayList<>();

  public MangaService(MangaRepo repo) {
    this.repo = repo;
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
          .filter(m -> m.id() != 3 && m.id() != 4)
          .take(5)
          .sort(comparingInt(Manga::h).reversed())
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

    return repo.changeStream()
        .subscribeOn(VIRTUAL_SCHEDULER)
        .doOnNext(
            event -> {
              final var changedManga = event.getFullDocument();
              final var operation = event.getOperationType();
              if (changedManga != null)
                System.out.println(
                    "Operation "
                        + operation.getValue()
                        + " Performed on Manga: "
                        + changedManga.t());
            })
        .mapNotNull(ChangeStreamDocument::getFullDocument)
        .onErrorContinue(
            (ex, o) -> {
              System.err.println("Error processing " + o + " Exception is " + ex);
              ex.printStackTrace();
            });
  }
}
