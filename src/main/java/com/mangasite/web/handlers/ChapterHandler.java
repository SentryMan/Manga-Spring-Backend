package com.mangasite.web.handlers;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.mangasite.domain.MangaChapters;
import com.mangasite.domain.requests.ChapterChangeRequest;
import com.mangasite.domain.requests.PageChangeRequest;
import com.mangasite.services.ChapterService;
import reactor.core.publisher.Mono;

@Component
public class ChapterHandler {

  @Autowired private ChapterService service;
  private AtomicInteger pageIndex = new AtomicInteger();

  public Mono<ServerResponse> getChapter(ServerRequest request) {
    return ServerResponse.ok()
        .body(service.getByID(Integer.parseInt(request.pathVariable("id"))), MangaChapters.class);
  }

  public Mono<ServerResponse> addChapter(ServerRequest request) {
    return request
        .bodyToMono(ChapterChangeRequest.class)
        .map(List::of)
        .flatMap(service::addChapter)
        .flatMap(ServerResponse.ok()::bodyValue);
  }

  public Mono<ServerResponse> updatePageLink(ServerRequest request) {
    return request
        .bodyToMono(PageChangeRequest.class)
        .map(
            p -> {
              if (p.isUsingAutoIncrement()) {
                if (p.getPageIndex() != -1) this.pageIndex = new AtomicInteger(p.getPageIndex());

                p.setPageIndex(pageIndex.getAndIncrement());
              }
              return p;
            })
        .map(List::of)
        .flatMapMany(service::updatePageLink)
        .next()
        .flatMap(ServerResponse.ok()::bodyValue);
  }

  public Mono<ServerResponse> addID(ServerRequest request) {
    service.addID();
    return ServerResponse.accepted().build();
  }
}
