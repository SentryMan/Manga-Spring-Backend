package com.mangasite.rsocket;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import com.mangasite.domain.MangaChapters;
import com.mangasite.services.ChapterService;

import io.rsocket.exceptions.CustomRSocketException;
import jakarta.inject.Singleton;
import reactor.core.publisher.Mono;

@Singleton
@Controller
public class RSocketChapterController {

  private final ChapterService service;

  public RSocketChapterController(ChapterService service) {
    this.service = service;
  }

  @MessageMapping("get-chapters-{id}")
  public Mono<MangaChapters> getChapter(@DestinationVariable("id") int id) {

    return service
        .getByID(id)
        .switchIfEmpty(
            Mono.error(new CustomRSocketException(0x404, "Could Not Find Chapter in DB")));
  }
}
