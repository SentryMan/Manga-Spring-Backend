package com.mangasite.controllers;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

import java.net.URI;

import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.mangasite.services.ChapterService;
import com.mangasite.services.ConnectService;
import com.mangasite.services.TokenService;

import io.avaje.inject.Bean;
import io.avaje.inject.Factory;

@Factory
public class TokenController {

  @Bean
  RouterFunction<ServerResponse> tokenRoute(ChapterService chapterService) {
    return route(GET("api/getToken"), TokenService::getToken)
        .andRoute(
            GET("api/chapter/update/{id}"),
            req -> {
              final var id = req.pathVariable("id").transform(Integer::parseInt);
              chapterService
                  .getByID(id)
                  .flatMap(ConnectService::fireAndForgetChapterUpdate)
                  .subscribe();

              return ServerResponse.accepted().build();
            })
        .andRoute(
            GET("api/getToken").or(GET("api/chapter/update/{id}")).negate(),
            req ->
                ServerResponse.permanentRedirect(URI.create("https://manga-spring.com/404"))
                    .build());
  }
}
