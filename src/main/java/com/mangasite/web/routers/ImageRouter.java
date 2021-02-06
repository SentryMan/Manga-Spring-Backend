package com.mangasite.web.routers;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.mangasite.web.handlers.ImageHandler;

@Configuration
public class ImageRouter {

  @Bean
  RouterFunction<ServerResponse> imageRoutes(ImageHandler imageHandler) {
    return route(GET("image/{id}/{id2}.png"), imageHandler::getImagePNG)
        .andRoute(GET("image/{id}/{id2}.jpg"), imageHandler::getImageJPEG);
  }
}
