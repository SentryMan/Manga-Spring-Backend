package com.collabera.web.handlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.collabera.services.ImageService;
import reactor.core.publisher.Mono;

@Component
public class ImageHandler {

  @Autowired private ImageService service;

  public Mono<ServerResponse> getImagePNG(ServerRequest request) {
    return ServerResponse.ok()
        .contentType(MediaType.IMAGE_PNG)
        .body(
            BodyInserters.fromDataBuffers(
                service.getPNGImage(request.pathVariable("id"), request.pathVariable("id2"))));
  }

  public Mono<ServerResponse> getImageJPEG(ServerRequest request) {
    return ServerResponse.ok()
        .contentType(MediaType.IMAGE_JPEG)
        .body(
            BodyInserters.fromDataBuffers(
                service.getJPEGImage(request.pathVariable("id"), request.pathVariable("id2"))));
  }
}
