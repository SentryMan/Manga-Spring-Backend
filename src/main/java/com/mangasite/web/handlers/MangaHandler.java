package com.mangasite.web.handlers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.mangasite.domain.requests.MangaChangeRequest;
import com.mangasite.services.MangaService;
import reactor.core.Exceptions;
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
    var formatter = new SimpleDateFormat("yyyy-mm-dd");
    var dateOp =
        request
            .queryParam("updateDate")
            .map(
                s -> {
                  try {
                    return formatter.parse(s).toInstant();
                  } catch (ParseException e) {
                    throw Exceptions.propagate(e);
                  }
                })
            .map(Instant::toEpochMilli);
    return service
        .updateLD(Integer.parseInt(request.pathVariable("id")), dateOp)
        .flatMap(ServerResponse.ok()::bodyValue)
        .switchIfEmpty(ServerResponse.badRequest().bodyValue("Manga Doesn't Exists"));
  }
}
