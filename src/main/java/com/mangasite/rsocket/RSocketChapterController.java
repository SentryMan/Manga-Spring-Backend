package com.mangasite.rsocket;

import static reactor.function.TupleUtils.function;

import java.time.Duration;
import java.util.List;
import java.util.Optional;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mangasite.record.ChapterChangeRequest;
import com.mangasite.record.PageChangeRequest;
import com.mangasite.services.ChapterService;
import com.mangasite.services.ConnectService;

import io.rsocket.exceptions.CustomRSocketException;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

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

  @MessageMapping("new-chapter")
  public Mono<Tuple2<Manga, MangaChapters>> addChapter(ChapterChangeRequest request) {
    return service.addChapter(List.of(request));
  }

  @MessageMapping("dedup-chapter-{id}")
  public void dedupChapter(@DestinationVariable("id") int id) {
    service.deleteDuplicateChapters(Optional.of(id));
  }

  @MessageMapping("update-page-channel-{id}")
  public Flux<String> updatePageLink(
      @DestinationVariable("id") int id, Flux<PageChangeRequest> requestFlux) {

    return requestFlux
        .bufferTimeout(500, Duration.ofSeconds(10))
        .concatMap(requestBuffer -> service.updatePageLink(id, requestBuffer))
        .map(
            function(
                (r, name) ->
                    "Updated/Added "
                        + r.chapterIndex()
                        + " Page "
                        + r.pageIndex()
                        + " of manga: "
                        + name
                        + " With Image URL: "
                        + r.pageURL()))
        .doOnNext(System.out::println)
        .doOnComplete(
            () -> {
              getChapter(id).flatMap(ConnectService::fireAndForgetChapterUpdate).subscribe();
            });
  }
}
