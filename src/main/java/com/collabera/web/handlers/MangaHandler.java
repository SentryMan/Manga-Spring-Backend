package com.collabera.web.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.collabera.models.Manga;
import com.collabera.models.requests.MangaChangeRequest;
import com.collabera.services.MangaService;
import reactor.core.publisher.Mono;

@Component
public class MangaHandler {

  @Autowired private MangaService service;

  // Get Mappings

  // Gets all manga currently stored
  public Mono<ServerResponse> getAll(ServerRequest request) {

    try {
      return service
          .findAll()
          .filter(m -> m.getRealID() != -1)
          .switchIfEmpty(a -> ServerResponse.notFound().build())
          .collectList()
          .flatMap(mangaList -> ServerResponse.ok().bodyValue(mangaList));
    } catch (final InterruptedException e) {
      return ServerResponse.status(HttpStatus.INTERNAL_SERVER_ERROR).bodyValue(e);
    }
  }

  public Mono<ServerResponse> getOne(ServerRequest request) {

    return service
        .findManga(Integer.parseInt(request.pathVariable("id")))
        .flatMap(manga -> ServerResponse.ok().bodyValue(manga))
        .switchIfEmpty(ServerResponse.notFound().build());
  }

  // Gets a set list of popular manga
  public Mono<ServerResponse> getPopular(ServerRequest request) {

    return ServerResponse.ok().body(service.findPopular(), Manga.class);
  }

  public Mono<ServerResponse> getLatest(ServerRequest request) {

    return service
        .findLatest()
        .switchIfEmpty(a -> ServerResponse.notFound().build())
        .collectList()
        .flatMap(latestManga -> ServerResponse.ok().bodyValue(latestManga));
  }

  public Mono<ServerResponse> post(ServerRequest request) {
    return request
        .bodyToMono(MangaChangeRequest.class)
        .flatMap(service::postNewManga)
        .flatMap(ServerResponse.ok()::bodyValue)
        .switchIfEmpty(ServerResponse.badRequest().bodyValue("Manga ALready Exists"));
  }

  public Mono<ServerResponse> fixID(ServerRequest request) {
    System.out.println("Fixing Manga");
    service.fixDuplicateIDs();
    return ServerResponse.accepted().build();
  }

  // Delete Mapping

  // Deletes manga with empty chapters
  public Mono<ServerResponse> deleteEmpty(ServerRequest request) {

    service.deleteByChapter(Integer.parseInt(request.pathVariable("numberOfChapters")));

    return ServerResponse.accepted().bodyValue("Deleting");
  }

  // Deletes duplicates from database
  public Mono<ServerResponse> deleteDups(ServerRequest request) {
    service.deleteDups();
    return ServerResponse.accepted().bodyValue("Deleting Duplicate Manga and chapters");
  }
}
