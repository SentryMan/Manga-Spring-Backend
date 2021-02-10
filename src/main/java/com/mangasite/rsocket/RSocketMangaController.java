package com.mangasite.rsocket;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.data.mongodb.core.ChangeStreamEvent;
import org.springframework.data.mongodb.core.ChangeStreamOptions;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import com.mangasite.domain.Manga;
import com.mangasite.helper.SavedData;
import com.mangasite.services.MangaService;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Controller
@RequiredArgsConstructor
public class RSocketMangaController {

  private final MangaService service;
  private final ReactiveMongoTemplate reactiveMongoTemplate;
  private final SavedData data;

  // Get Mappings

  // Gets all manga currently stored
  @MessageMapping("get-mangas")
  public Flux<Manga> getAll() {
    return service.findAll();
  }

  @MessageMapping("get-manga")
  public Mono<Manga> getOne(int id) {

    return service.findManga(id);
  }

  // Gets a set list of popular manga
  @MessageMapping("popular-manga")
  public Flux<Manga> getPopular() {

    return service.findPopular();
  }

  @MessageMapping("latest-manga")
  public Flux<Manga> getLatest() {

    return service.findLatest();
  }

  @MessageMapping("mongo-change-stream")
  public Flux<Manga> watchForDBChanges() {
    // set changestream options to watch for any changes to the manga collection
    final var options = ChangeStreamOptions.builder().returnFullDocumentOnUpdate().build();

    // return a flux that watches the changestream and returns the full document
    return reactiveMongoTemplate
        .changeStream("Manga", options, Manga.class)
        .doOnSubscribe(s -> System.out.println("Watching Mongo Change Stream"))
        .map(ChangeStreamEvent::getBody)
        .doOnNext(m -> System.out.println("Changed Manga: " + m.getT()))
        .doOnNext(
            m -> {
              final Set<String> nameset = new HashSet<>();
              nameset.add(m.getA());
              data.updateList(List.of(m), nameset);
            })
        .onErrorContinue(
            (ex, o) -> System.err.println("Error processing " + o + "Exception is " + ex));
  }
}
