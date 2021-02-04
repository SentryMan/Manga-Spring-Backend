package com.collabera.services;

import java.util.Arrays;
import java.util.HashSet;
import org.springframework.data.mongodb.core.ChangeStreamEvent;
import org.springframework.data.mongodb.core.ChangeStreamOptions;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.collabera.helper.SavedData;
import com.collabera.models.Manga;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
public class ChangeStreamHandler {

  private final ReactiveMongoTemplate reactiveMongoTemplate;
  private final SavedData data;
  public ChangeStreamHandler(
      ReactiveMongoTemplate reactiveMongoTemplate, SavedData data) {
    this.reactiveMongoTemplate = reactiveMongoTemplate;
    this.data = data;
    this.changeStream = watchForDBChanges();
    changeStream.subscribe();
  }

  private final Flux<Manga> changeStream;


  public Mono<ServerResponse> getUpdateEvent(ServerRequest request) {

    final Flux<ServerSentEvent<Manga>> sseFlux =
        changeStream
        // data.multicastMangaListFlux
        .map(changedManga -> ServerSentEvent.<Manga>builder().data(changedManga).build());

    return ServerResponse.ok().body(BodyInserters.fromServerSentEvents(sseFlux));
  }

  public Flux<Manga> watchForDBChanges() {
    // set changestream options to watch for any changes to the manga collection
    final ChangeStreamOptions options =
        ChangeStreamOptions.builder().returnFullDocumentOnUpdate().build();

    // return a flux that watches the changestream and returns the full document
    return reactiveMongoTemplate
        .changeStream("Manga", options, Manga.class)
        .doOnSubscribe(s -> System.out.println("Watching Mongo Change Stream"))
        .map(ChangeStreamEvent::getBody)
        .doOnNext(m -> System.out.println("Changed Manga: " + m.getT()))
        .doOnNext(m -> data.updateList(Arrays.asList(m), new HashSet<>()))
        .doOnError(throwable -> System.err.println(throwable));
  }
}
