package com.collabera.web.handlers;

import java.util.Arrays;
import java.util.HashSet;
import org.springframework.beans.factory.annotation.Autowired;
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

  @Autowired private ReactiveMongoTemplate reactiveMongoTemplate;
  @Autowired SavedData data;

  public Mono<ServerResponse> getUpdateEvent(ServerRequest request) {

    final Flux<ServerSentEvent<Manga>> sseFlux =
        this.watchForDBChanges()
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
        .map(ChangeStreamEvent::getBody)
        .doOnNext(m -> System.out.println("Changed Manga: " + m.getT()))
        .doOnNext(m -> data.updateList(Arrays.asList(m), new HashSet<>()))
        .doOnError(throwable -> System.err.println(throwable));
  }
}
