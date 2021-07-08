package com.mangasite.web.handlers;

import static org.springframework.web.reactive.function.server.ServerResponse.badRequest;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.mangasite.domain.requests.MangaChangeRequest;
import com.mangasite.services.MangaService;

import reactor.core.publisher.Mono;

@Component
public class MangaHandler {

  private final MangaService service;

  public MangaHandler(MangaService service) {
    this.service = service;
  }

  public Mono<ServerResponse> post(ServerRequest request) {
    return request
        .bodyToMono(MangaChangeRequest.class)
        .flatMap(service::postNewManga)
        .flatMap(ok()::bodyValue)
        .switchIfEmpty(badRequest().bodyValue("Manga Already Exists"));
  }

  public Mono<ServerResponse> patchUpdateDate(ServerRequest request) {

    return service
        .updateLD(Integer.parseInt(request.pathVariable("id")), request.queryParam("updateDate"))
        .flatMap(ok()::bodyValue)
        .switchIfEmpty(badRequest().bodyValue("Manga Doesn't Exist"));
  }
}
