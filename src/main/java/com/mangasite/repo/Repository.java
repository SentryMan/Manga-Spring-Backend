package com.mangasite.repo;

import static com.mangasite.domain.Constants.VIRTUAL_SCHEDULER;
import static com.mongodb.client.model.Filters.eq;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoIterable;
import com.mongodb.client.model.changestream.ChangeStreamDocument;
import com.mongodb.client.model.changestream.FullDocument;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public abstract class Repository<T> {

  protected final MongoCollection<T> coll;

  protected Repository(MongoCollection<T> coll) {
    this.coll = coll;
  }

  public Mono<T> findById(int id) {

    return Mono.fromCallable(() -> coll.find(eq("_id", id)).first()).subscribeOn(VIRTUAL_SCHEDULER);
  }

  public Flux<T> findAll() {

    return toFlux(coll.find());
  }

  public Flux<ChangeStreamDocument<T>> changeStream() {
    return Flux.generate(
        sink -> coll.watch().fullDocument(FullDocument.UPDATE_LOOKUP).forEach(sink::next));
  }

  protected Mono<T> toMono(FindIterable<T> iterable) {

    return Mono.fromCallable(iterable::first).subscribeOn(VIRTUAL_SCHEDULER);
  }

  protected Flux<T> toFlux(MongoIterable<T> iterable) {

    return Mono.fromCallable(
            () -> {
              var stream = Flux.<T>empty();
              try (var cursor = iterable.iterator()) {
                while (cursor.hasNext()) stream = stream.concatWithValues(cursor.next());
              }
              return stream;
            })
        .flatMapMany(f -> f)
        .subscribeOn(VIRTUAL_SCHEDULER);
  }
}
