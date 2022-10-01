package com.mangasite.repo;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.gte;
import static com.mongodb.client.model.Filters.lte;

import java.util.List;

import com.mangasite.domain.Manga;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Aggregates;

import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import reactor.core.publisher.Flux;

@Singleton
public class MangaRepo extends Repository<Manga> {

  @Inject
  public MangaRepo(MongoCollection<Manga> coll) {
    super(coll);
  }

  public Flux<Manga> sample(int i) {
    return toFlux(coll.aggregate(List.of(Aggregates.sample(i))));
  }

  public Flux<Manga> findByLd(long l, long m) {
    return toFlux(coll.find(and(gte("ld", l), lte("ld", m))));
  }
}
