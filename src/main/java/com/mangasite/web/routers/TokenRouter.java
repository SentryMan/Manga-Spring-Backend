package com.mangasite.web.routers;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.mangasite.services.TokenService;

@Configuration
public class TokenRouter {

  @Bean
  RouterFunction<ServerResponse> tokenRoute(TokenService service) {
    return route(GET("api/getToken"), service::getToken);
  }
}
