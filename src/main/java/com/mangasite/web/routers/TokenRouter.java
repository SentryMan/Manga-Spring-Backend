package com.mangasite.web.routers;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

import java.net.URI;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.mangasite.services.TokenService;

@Configuration
public class TokenRouter {

  @Bean
  RouterFunction<ServerResponse> tokenRoute(TokenService service) {
    return route(GET("api/getToken"), service::getToken)
        .andRoute(
            GET("api/getToken").negate(),
            req ->
                ServerResponse.permanentRedirect(URI.create("https://manga-spring.com/404"))
                    .build());
  }
}
