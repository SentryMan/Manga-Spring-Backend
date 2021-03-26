package com.mangasite.rsocket;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mangasite.domain.requests.ChapterChangeRequest;
import com.mangasite.domain.requests.PageChangeRequest;
import com.mangasite.services.ChapterService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

@Controller
public class RSocketChapterController {

  private final ChapterService service;
  private AtomicInteger pageIndex = new AtomicInteger();

  public RSocketChapterController(ChapterService service) {
    this.service = service;
  }

  @MessageMapping("get-chapters-{id}")
  public Mono<MangaChapters> getChapter(@DestinationVariable("id") int id) {
    return service.getByID(id);
  }

  @MessageMapping("new-chapter")
  public Mono<Tuple2<Manga, MangaChapters>> addChapter(ChapterChangeRequest request) {
    return service.addChapter(List.of(request));
  }

  @MessageMapping("update-page-channel")
  public Flux<String> updatePageLink(Flux<PageChangeRequest> requestFlux) {

    return requestFlux
        .map(
            p -> {
              if (p.isUsingAutoIncrement()) {
                if (p.getPageIndex() != -1) this.pageIndex = new AtomicInteger(p.getPageIndex());

                p.setPageIndex(pageIndex.getAndIncrement());
              }
              return p;
            })
        .buffer(500)
        .flatMap(service::updatePageLink, 1);
  }
}
