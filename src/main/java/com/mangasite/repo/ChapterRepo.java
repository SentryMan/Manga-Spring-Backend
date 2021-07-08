package com.mangasite.repo;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.mangasite.domain.MangaChapters;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface ChapterRepo extends ReactiveMongoRepository<MangaChapters, BigInteger> {

  Mono<MangaChapters> getByMangaName(String Name);

  Mono<MangaChapters> getByRealID(int realID);

  @Query("{'realID' : ?0}")
  Flux<MangaChapters> getDupsByRealID(int realID);
}
