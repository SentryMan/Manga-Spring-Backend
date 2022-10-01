package com.mangasite.services;

import com.mangasite.domain.MangaChapters;
import com.mangasite.repo.ChapterRepo;

import jakarta.inject.Singleton;
import reactor.core.publisher.Mono;

/**
 * Service Class That Returns Manga Chapters
 *
 * @author Josiah
 */
@Singleton
public class ChapterService {

  private final ChapterRepo repo;

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
}
