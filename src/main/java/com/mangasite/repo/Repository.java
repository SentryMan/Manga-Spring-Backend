package com.mangasite.repo;

import static com.mongodb.client.model.Filters.eq;

import com.mongodb.client.model.changestream.ChangeStreamDocument;
import com.mongodb.client.model.changestream.FullDocument;
import com.mongodb.reactivestreams.client.MongoCollection;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public abstract class Repository<T> {

  protected final MongoCollection<T> coll;

  protected Repository(MongoCollection<T> coll) {
    this.coll = coll;
  }

  public Mono<T> findById(int id) {

    return Mono.from(coll.find(eq("_id", id)).first());
  }

  public Flux<T> findAll() {

    return Flux.from(coll.find());
  }

  public Flux<ChangeStreamDocument<T>> changeStream(Class<T> clazz) {
    return Flux.from(coll.watch(clazz).fullDocument(FullDocument.UPDATE_LOOKUP));
  }
}
