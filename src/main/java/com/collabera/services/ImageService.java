package com.collabera.services;

import static reactor.core.scheduler.Schedulers.boundedElastic;
import java.time.Duration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DefaultDataBufferFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.util.retry.Retry;

/**
 * Service class that returns the images of a manga
 *
 * @author Josiah
 */
@Service
public class ImageService {

  @Autowired private WebClient webClient;

  /**
   * Returns a PNG MangaPage
   *
   * @param imageId the ID of the image
   * @param imageId2 the second part of the ID
   * @return
   */
  public Mono<DataBuffer> getPNGImage(String imageId, String imageId2) {

    if (imageId2 == null)
      return webClient
          .get()
          .uri("https://cdn.mangaeden.com/mangasimg/" + imageId + ".png")
          .accept(MediaType.IMAGE_PNG)
          .retrieve()
          .bodyToMono(byte[].class)
          .publishOn(boundedElastic())
          .retryWhen(Retry.backoff(3, Duration.ofSeconds(1)))
          .map(imageBytes -> new DefaultDataBufferFactory().wrap(imageBytes));
    else
      return webClient
          .get()
          .uri("https://cdn.mangaeden.com/mangasimg/" + imageId + '/' + imageId2 + ".png")
          .accept(MediaType.IMAGE_PNG)
          .retrieve()
          .bodyToMono(byte[].class)
          .publishOn(boundedElastic())
          .retryWhen(Retry.backoff(3, Duration.ofSeconds(1)))
          .map(imageBytes -> new DefaultDataBufferFactory().wrap(imageBytes));
  }

  /**
   * Returns a JPEG MangaPage
   *
   * @param imageId the ID of the image
   * @param imageId2 the second part of the ID
   * @return
   */
  public Mono<DataBuffer> getJPEGImage(String id, String id2) {

    if (id2 == null)
      return webClient
          .get()
          .uri("https://cdn.mangaeden.com/mangasimg/" + id + ".jpg")
          .accept(MediaType.IMAGE_JPEG)
          .retrieve()
          .bodyToMono(byte[].class)
          .publishOn(boundedElastic())
          .retryWhen(Retry.backoff(3, Duration.ofSeconds(3)))
          .map(imageBytes -> new DefaultDataBufferFactory().wrap(imageBytes));
    else
      return webClient
          .get()
          .uri("https://cdn.mangaeden.com/mangasimg/" + id + '/' + id2 + ".jpg")
          .accept(MediaType.IMAGE_JPEG)
          .retrieve()
          .bodyToMono(byte[].class)
          .publishOn(boundedElastic())
          .retryWhen(Retry.backoff(3, Duration.ofSeconds(3)))
          .map(imageBytes -> new DefaultDataBufferFactory().wrap(imageBytes));
  }
}
