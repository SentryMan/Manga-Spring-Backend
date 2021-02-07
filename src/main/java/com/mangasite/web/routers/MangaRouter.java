package com.mangasite.web.routers;

import static org.springframework.web.reactive.function.server.RequestPredicates.DELETE;
import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.POST;
import static org.springframework.web.reactive.function.server.RequestPredicates.PUT;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.mangasite.web.handlers.MangaHandler;

@Configuration
public class MangaRouter {

  @Bean
  RouterFunction<ServerResponse> mangaRoutes(MangaHandler mangaListHandler) {
    return route(GET("api/mangainfo"), mangaListHandler::getAll)
        .andRoute(GET("api/mangainfo/{id}"), mangaListHandler::getOne)
        .andRoute(GET("api/popular"), mangaListHandler::getPopular)
        .andRoute(GET("api/latest"), mangaListHandler::getLatest)
        .andRoute(POST("api/manga"), mangaListHandler::post)
        .andRoute(PUT("api/fixId"), mangaListHandler::fixID)
        .andRoute(DELETE("/api/dups"), mangaListHandler::deleteDups);
  }
}
