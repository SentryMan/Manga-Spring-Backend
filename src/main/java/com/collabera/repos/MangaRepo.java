package com.collabera.repos;

import java.math.BigInteger;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import com.collabera.models.Manga;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface MangaRepo extends ReactiveMongoRepository<Manga, BigInteger> {

  Mono<Manga> getBya(String a);

  @Query("{'RealID' : ?0}")
  Mono<Manga> getByRealID(int RealID);

  @Query("{'ld' : { $gte: ?0, $lte: ?1 } }")
  Flux<Manga> findByLd(long l, long m);
}
