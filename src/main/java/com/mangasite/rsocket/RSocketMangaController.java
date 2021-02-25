package com.mangasite.rsocket;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import com.mangasite.domain.Manga;
import com.mangasite.services.MangaService;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Controller
@RequiredArgsConstructor
public class RSocketMangaController {

  private final MangaService service;

  // Get Mappings

  // Gets all manga currently stored
  @MessageMapping("get-mangas")
  public Flux<Manga> getAll() {
    return service.findAll();
  }

  @MessageMapping("get-manga-{id}")
  public Mono<Manga> getOne(@DestinationVariable("id") int id) {

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
    return service.watchDBChanges(false);
  }
}
