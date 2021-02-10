package com.mangasite.rsocket;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.messaging.rsocket.RSocketRequester;
import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

@SpringBootTest
class RSocketMangaControllerTest {

  @Autowired RSocketRequester requester;

  @Test
  void testMangaRoute() {

    StepVerifier.create(requester.route("get-mangas").retrieveFlux(Manga.class).next())
        .expectNextCount(1)
        .verifyComplete();
  }

  @Test
  void testSingleMangaRoute() {
    final Mono<Manga> mono =
        requester
            .route("get-manga")
            .data(0)
            .retrieveMono(Manga.class)
            .doOnError(Throwable::printStackTrace);
    StepVerifier.create(mono).expectNextCount(1).verifyComplete();
  }

  @Test
  void testChapterRoute() {

    final Mono<MangaChapters> mono =
        requester.route("get-chapters").data(0).retrieveMono(MangaChapters.class);

    StepVerifier.create(mono).expectNextCount(1).verifyComplete();
  }

  @Test
  void testPopular() {

    StepVerifier.create(requester.route("popular-manga").retrieveFlux(Manga.class).next())
        .expectNextCount(1)
        .verifyComplete();
  }

  @Test
  void testLatest() {

    StepVerifier.create(requester.route("latest-manga").retrieveFlux(Manga.class).next())
        .verifyComplete();
  }
}
