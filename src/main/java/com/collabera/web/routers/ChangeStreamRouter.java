package com.collabera.web.routers;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.collabera.web.handlers.ChangeStreamHandler;

@Configuration
public class ChangeStreamRouter {

  @Bean
  RouterFunction<ServerResponse> streamRoute(ChangeStreamHandler handler) {
    return route(GET("db/changeStream"), handler::getUpdateEvent);
  }
}
