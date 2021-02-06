package com.collabera.web.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.collabera.models.MangaChapters;
import com.collabera.models.requests.ChapterChangeRequest;
import com.collabera.models.requests.PageChangeRequest;
import com.collabera.services.ChapterService;
import reactor.core.publisher.Mono;

@Component
public class ChapterHandler {

  @Autowired private ChapterService service;

  public Mono<ServerResponse> getChapter(ServerRequest request) {
    return ServerResponse.ok()
        .body(service.getByID(Integer.parseInt(request.pathVariable("id"))), MangaChapters.class);
  }

  public Mono<ServerResponse> addChapter(ServerRequest request) {
    return request
        .bodyToMono(ChapterChangeRequest.class)
        .flatMap(service::addChapter)
        .flatMap(ServerResponse.ok()::bodyValue);
  }

  public Mono<ServerResponse> updatePageLink(ServerRequest request) {
    return request
        .bodyToMono(PageChangeRequest.class)
        .flatMap(service::updatePageLink)
        .flatMap(ServerResponse.ok()::bodyValue);
  }

  public Mono<ServerResponse> addID(ServerRequest request) {
    service.addID();
    return ServerResponse.accepted().build();
  }
}
