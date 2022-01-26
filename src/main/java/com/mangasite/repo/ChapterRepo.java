package com.mangasite.repo;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.mangasite.domain.MangaChapters;

import reactor.core.publisher.Mono;

@Repository
public interface ChapterRepo extends ReactiveMongoRepository<MangaChapters, Integer> {

  Mono<MangaChapters> getByMangaName(String name);
}
