package com.mangasite.rsocket;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.test.context.ActiveProfiles;
import com.mangasite.domain.Manga;
import reactor.test.StepVerifier;

@SpringBootTest
@ActiveProfiles("test")
class RSocketMangaControllerTest {

  @Autowired RSocketRequester requester;

  @Test
  void test() {
    StepVerifier.create(requester.route("AllManga").retrieveFlux(Manga.class).take(1))
        .expectNextCount(1)
        .verifyComplete();
  }
}
