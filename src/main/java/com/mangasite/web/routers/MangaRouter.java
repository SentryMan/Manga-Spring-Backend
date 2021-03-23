package com.mangasite.web.routers;

import static org.springframework.web.reactive.function.server.RequestPredicates.DELETE;
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
    return route(POST("api/manga"), mangaListHandler::post)
        .andRoute(PUT("api/fixId"), mangaListHandler::fixID)
        .andRoute(DELETE("/api/dups"), mangaListHandler::deleteDups);
  }
}
