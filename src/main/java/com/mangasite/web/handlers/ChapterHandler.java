package com.mangasite.web.handlers;

import static org.springframework.web.reactive.function.server.ServerResponse.accepted;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.mangasite.domain.requests.ChapterChangeRequest;
import com.mangasite.domain.requests.PageChangeRequest;
import com.mangasite.services.ChapterService;
import com.mangasite.services.ConnectService;

import reactor.core.publisher.Mono;

@Component
public class ChapterHandler {

  private final ChapterService service;
  private AtomicInteger pageIndex = new AtomicInteger();

  public ChapterHandler(ChapterService service) {
    this.service = service;
  }

  public Mono<ServerResponse> getChapter(ServerRequest request) {
    return service.getByID(Integer.parseInt(request.pathVariable("id"))).flatMap(ok()::bodyValue);
  }

  public Mono<ServerResponse> addChapter(ServerRequest request) {
    return request
        .bodyToMono(ChapterChangeRequest.class)
        .map(List::of)
        .flatMap(service::addChapter)
        .doOnNext(mc -> ConnectService.fireAndForgetChapterUpdate(mc.getT2()).subscribe())
        .flatMap(ok()::bodyValue);
  }

  public Mono<ServerResponse> updatePageLink(ServerRequest request) {
    return request
        .bodyToMono(PageChangeRequest.class)
        .doOnNext(
            p -> {
              if (p.isUsingAutoIncrement()) {
                if (p.getPageIndex() != -1) pageIndex = new AtomicInteger(p.getPageIndex());

                p.setPageIndex(pageIndex.getAndIncrement());
              }
            })
        .map(List::of)
        .flatMapMany(service::updatePageLink)
        .next()
        .flatMap(ok()::bodyValue);
  }

  public Mono<ServerResponse> dedup(ServerRequest request) {
    service.deleteDuplicateChapters(request.queryParam("id").map(Integer::parseInt));
    return accepted().bodyValue("Dedup Request Accepted");
  }
}
