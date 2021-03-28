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
import com.mangasite.web.handlers.ChapterHandler;

@Configuration
public class ChapterRouter {

  @Bean
  RouterFunction<ServerResponse> chapterRoutes(ChapterHandler chapterHandler) {
    return route(GET("api/chapters/{id}"), chapterHandler::getChapter)
        .andRoute(POST("api/chapter"), chapterHandler::addChapter)
        .andRoute(PUT("api/page"), chapterHandler::updatePageLink)
        .andRoute(DELETE("api/chapters/dedup"), chapterHandler::dedup);
  }
}
