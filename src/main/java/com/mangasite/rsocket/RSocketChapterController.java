package com.mangasite.rsocket;

import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.reactive.function.server.ServerRequest;
import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mangasite.domain.requests.ChapterChangeRequest;
import com.mangasite.domain.requests.PageChangeRequest;
import com.mangasite.services.ChapterService;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

@Controller
@RequiredArgsConstructor
public class RSocketChapterController {

  private final ChapterService service;
  private AtomicInteger pageIndex = new AtomicInteger();

  @MessageMapping("get-chapters")
  public Mono<MangaChapters> getChapter(int id) {
    return service.getByID(id);
  }

  @MessageMapping("new-chapter")
  public Mono<Tuple2<Manga, MangaChapters>> addChapter(ChapterChangeRequest request) {
    return service.addChapter(request);
  }

  @MessageMapping("update-page")
  public Mono<String> updatePageLink(ServerRequest request) {
    return request
        .bodyToMono(PageChangeRequest.class)
        .map(
            p -> {
              if (p.getPageIndex() != -1) this.pageIndex = new AtomicInteger(p.getPageIndex());

              p.setPageIndex(pageIndex.getAndIncrement());
              return p;
            })
        .flatMap(service::updatePageLink);
  }
}
