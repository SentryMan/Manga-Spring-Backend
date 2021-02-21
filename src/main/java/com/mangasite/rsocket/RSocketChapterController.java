package com.mangasite.rsocket;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mangasite.domain.requests.ChapterChangeRequest;
import com.mangasite.domain.requests.PageChangeRequest;
import com.mangasite.services.ChapterService;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
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

  @PreAuthorize("hasRole('ADMIN')")
  @MessageMapping("new-chapter")
  public Mono<Tuple2<Manga, MangaChapters>> addChapter(ChapterChangeRequest request) {
    return service.addChapter(List.of(request));
  }

  @PreAuthorize("hasRole('ADMIN')")
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
