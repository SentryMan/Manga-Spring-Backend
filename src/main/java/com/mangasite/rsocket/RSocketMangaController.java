package com.mangasite.rsocket;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import com.mangasite.domain.Manga;
import com.mangasite.services.MangaService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Controller
public class RSocketMangaController {

  private final MangaService service;

  public RSocketMangaController(MangaService service) {
    this.service = service;
  }

  @MessageMapping("get-mangas")
  public Flux<Manga> getAll() {
    return service.findAll();
  }

  @MessageMapping("get-manga-{id}")
  public Mono<Manga> getMangaByID(@DestinationVariable("id") int id) {

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
