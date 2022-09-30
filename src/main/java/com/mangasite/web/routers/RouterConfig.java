package com.mangasite.web.routers;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.mangasite.rsocket.RSocketChapterController;
import com.mangasite.services.TokenService;

import reactor.core.publisher.Mono;

@Configuration
public class RouterConfig {

  @Bean
  RouterFunction<ServerResponse> tokenRoute(TokenService service, RSocketChapterController chaps) {
    return route(GET("api/getToken"), service::getToken)
        .andRoute(
            GET("api/chapter/update/{id}"),
            req ->
                Mono.fromRunnable(
                    () ->
                        chaps.updateClients(req.pathVariable("id").transform(Integer::parseInt))));
  }
}
