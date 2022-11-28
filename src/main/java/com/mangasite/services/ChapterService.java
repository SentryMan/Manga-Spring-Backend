package com.mangasite.services;

import com.mangasite.domain.MangaChapters;
import com.mangasite.repo.ChapterRepo;
import com.mongodb.client.model.changestream.ChangeStreamDocument;

import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Class That Returns Manga Chapters
 *
 * @author Josiah
 */
@Singleton
public class ChapterService {

  private final ChapterRepo repo;

  @Inject
  public ChapterService(ChapterRepo repo) {
    this.repo = repo;
  }

  /**
   * Returns a Mono<Chapter> that contains the Chapter with the given name
   *
   * @param ChapterID the numerical ID of the chapter
   */
  public Mono<MangaChapters> getByID(int chapterID) {

    return repo.findById(chapterID);
  }

  /**
   * Creates a Flux that watches the mongo change stream and returns updated manga;
   *
   * @param principle
   * @return Mongo ChangeStream Flux
   */
  public Flux<MangaChapters> watchChapterChanges() {

    return repo.changeStream(MangaChapters.class)
        .doOnNext(
            event -> {
              final var changedManga = event.getFullDocument();
              final var operation = event.getOperationType();
              if (changedManga != null)
                System.out.println(
                    "Operation "
                        + operation.getValue()
                        + " Performed on Chapter: "
                        + changedManga.getMangaName());
            })
        .mapNotNull(ChangeStreamDocument::getFullDocument)
        .onErrorContinue(
            (ex, o) -> {
              System.err.println("Error processing " + o + " Exception is " + ex);
              ex.printStackTrace();
            });
  }
}
