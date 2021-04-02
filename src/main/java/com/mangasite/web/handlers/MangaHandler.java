package com.mangasite.web.handlers;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.chrono.ChronoZonedDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.mangasite.domain.requests.MangaChangeRequest;
import com.mangasite.services.MangaService;
import reactor.core.publisher.Mono;

@Component
public class MangaHandler {

  @Autowired private MangaService service;

  public Mono<ServerResponse> post(ServerRequest request) {
    return request
        .bodyToMono(MangaChangeRequest.class)
        .flatMap(service::postNewManga)
        .flatMap(ServerResponse.ok()::bodyValue)
        .switchIfEmpty(ServerResponse.badRequest().bodyValue("Manga Already Exists"));
  }

  public Mono<ServerResponse> patchUpdateDate(ServerRequest request) {
    var epochSecondOp =
        request
            .queryParam("updateDate")
            .map(s -> LocalDate.parse(s).atStartOfDay(ZoneId.systemDefault()))
            .map(ChronoZonedDateTime::toEpochSecond);
    return service
        .updateLD(Integer.parseInt(request.pathVariable("id")), epochSecondOp)
        .flatMap(ServerResponse.ok()::bodyValue)
        .switchIfEmpty(ServerResponse.badRequest().bodyValue("Manga Doesn't Exist"));
  }
}
