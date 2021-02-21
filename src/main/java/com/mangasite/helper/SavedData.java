package com.mangasite.helper;

import java.time.Duration;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.CountDownLatch;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import com.mangasite.domain.Manga;
import com.mangasite.repos.MangaRepo;
import lombok.Data;
import reactor.core.Exceptions;
import reactor.core.publisher.Flux;

/**
 * Class that handles the list of manga stored in memory
 *
 * @author Josiah
 */
@Data
@Component
public class SavedData {

  private final MangaRepo repo;

  private Flux<Manga> multicastMangaListFlux = Flux.empty();
  private Flux<Manga> popularManga;
  private Flux<Manga> recentManga;
  private List<Manga> savedList = new ArrayList<>();
  private CountDownLatch dataLatch;

  SavedData(MangaRepo repo, @Value("${popular.manga}") String[] popularMangaAlias) {
    this.repo = repo;
    multicastMangaListFlux = repo.findAll().share().cache(Duration.ofMillis(10000));
    popularManga = popular(popularMangaAlias);
    recentManga = repo.findByLd(new Date().getTime() / 1000 - 604800, new Date().getTime() / 1000);
    loadManga();
  }

  public void awaitLatch() {
    try {
      dataLatch.await();
    } catch (final InterruptedException e) {
      throw Exceptions.propagate(e);
    }
  }

  // this will get the data from the database on startup

  public void loadManga() {
    this.dataLatch = new CountDownLatch(1);
    System.out.println("\nLoading Data");

    multicastMangaListFlux
        .collectList()
        .subscribe(
            mangalist -> {
              System.out.println("Data Loaded");
              this.multicastMangaListFlux = Flux.fromIterable(mangalist).share();
              this.savedList = mangalist;
              dataLatch.countDown();
            },
            e -> System.err.println(e));
  }

  /**
   * @param popularManga2
   * @return a flux resolving into the popular list of manga<br>
   *     sourced from the DB
   */
  public Flux<Manga> popular(String[] popularMangaAlias) {

    Flux<Manga> popularMangaFlux = Flux.empty();
    for (final String alias : popularMangaAlias)
      popularMangaFlux = popularMangaFlux.concatWith(repo.getBya(alias));

    return popularMangaFlux;
  }

  /**
   * Updates the saved list by adding new elements
   *
   * @param updatedManga the list of updated manga
   * @param nameSet the set of names used to remove the old versions
   */
  public void addToList(Manga newManga) {

    savedList.add(newManga);
    System.out.println("added " + newManga.getT() + " to savedList");
  }

  /**
   * Updates the saved list by replacing the outdated entries with the updated version
   *
   * @param updatedManga the list of updated manga
   * @param nameSet the set of names used to remove the old versions
   */
  public void updateList(List<Manga> updatedManga) {

    final Set<String> nameSet = new HashSet<>();
    updatedManga.stream().map(Manga::getA).forEach(nameSet::add);
    final Iterator<Manga> itr = savedList.iterator();
    while (itr.hasNext()) {
      final Manga manga = itr.next();
      if (!nameSet.add(manga.getA())) {
        itr.remove();
        savedList.remove(manga);
      }
    }
    savedList.addAll(updatedManga);
  }

  public void refreshCache() {
    repo.findAll()
        .collectList()
        .subscribe(
            mangalist -> {
              System.out.println("Refreshed List");
              this.multicastMangaListFlux = Flux.fromIterable(mangalist).share();
              this.savedList = mangalist;
            },
            e -> System.err.println(e));
  }
}
