package com.mangasite.repo;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.mangasite.domain.Manga;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface MangaRepo extends ReactiveMongoRepository<Manga, Integer> {

  @Aggregation("{$sample: {size: ?0}}")
  Flux<Manga> sample(int size);

  @Query("{'ld' : { $gte: ?0, $lte: ?1 } }")
  Flux<Manga> findByLd(long l, long m);

  @Query("{'t' : ?0}")
  Mono<Manga> getByTitle(String t);
}
