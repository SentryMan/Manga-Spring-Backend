package com.mangasite.rsocket;

import java.time.Duration;
import java.util.List;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mangasite.domain.requests.ChapterChangeRequest;
import com.mangasite.domain.requests.PageChangeRequest;
import com.mangasite.services.ChapterService;
import com.mangasite.services.ConnectService;

import io.rsocket.exceptions.CustomRSocketException;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

@Controller
public class RSocketChapterController {

  private final ChapterService service;
  private final ConnectService connectService;

  public RSocketChapterController(ChapterService service, ConnectService connectService) {
    this.service = service;
    this.connectService = connectService;
  }

  @MessageMapping("get-chapters-{id}")
  public Mono<MangaChapters> getChapter(@DestinationVariable("id") int id) {

    return service
        .getByID(id)
        .switchIfEmpty(
            Mono.error(new CustomRSocketException(0x404, "Could Not Find Chapter in DB")));
  }

  @MessageMapping("new-chapter")
  public Mono<Tuple2<Manga, MangaChapters>> addChapter(ChapterChangeRequest request) {
    return service.addChapter(List.of(request));
  }

  @MessageMapping("update-page-channel-{id}")
  public Flux<String> updatePageLink(
      @DestinationVariable("id") int id, Flux<PageChangeRequest> requestFlux) {

    return requestFlux
        .buffer(Duration.ofSeconds(10))
        .concatMap(service::updatePageLink)
        .map(
            r ->
                "Updated/Added "
                    + r.getChapterIndex()
                    + " Page "
                    + (r.getPageIndex() + 1)
                    + " of manga: "
                    + r.getMangaName()
                    + " With Image URL: "
                    + r.getPageURL())
        .doOnNext(System.out::println)
        .doOnComplete(
            () -> {
              getChapter(id).flatMap(connectService::fireAndForgetChapterUpdate).subscribe();
            });
  }
}
