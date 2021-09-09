package com.mangasite.services;

import org.springframework.stereotype.Service;

import com.mangasite.domain.MangaChapters;
import com.mangasite.repo.ChapterRepo;
import com.mangasite.repo.MangaRepo;

import reactor.core.publisher.Mono;

/**
 * Service Class That Returns Manga Chapters
 *
 * @author Josiah
 */
@Service
public class ChapterService {

  private final ChapterRepo repo;

  public ChapterService(ChapterRepo repo, MangaRepo mangaRepo) {
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
