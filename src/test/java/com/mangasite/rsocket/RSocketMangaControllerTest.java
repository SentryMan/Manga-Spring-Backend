package com.mangasite.rsocket;

import java.net.URI;
import java.net.URISyntaxException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.security.rsocket.metadata.BearerTokenMetadata;
import org.springframework.security.rsocket.metadata.UsernamePasswordMetadata;
import org.springframework.util.MimeTypeUtils;
import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import io.rsocket.exceptions.RejectedSetupException;
import io.rsocket.metadata.WellKnownMimeType;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

@SpringBootTest
class RSocketMangaControllerTest {

  @Autowired RSocketRequester.Builder builder;

  String rsocketUri = "ws://localhost:6969/rsocket";

  private final BearerTokenMetadata credentials =
      new BearerTokenMetadata(
          "eyJhbGciOiJIUzUxM9.eyJzdWIiOiJJQ2FuJ3RUaGlua09mQUdvb2RPbmUiLCJleHAiOjE2MTQyMjIwMzEsImlhdCI6MTYxNDIyMDIzMX0.Vzis1EWefvnl_V85fOQVwx9xezzn5Fl03H-FQYYBFCHEuZoKzhFIMggquYs1so1v8Uim4gIosRWd1LwnCw6OZw");

  @BeforeEach
  void before() {

    builder =
        builder
            .dataMimeType(MediaType.APPLICATION_CBOR)
            .setupData("Test")
            .setupMetadata(
                credentials,
                MimeTypeUtils.parseMimeType(
                    WellKnownMimeType.MESSAGE_RSOCKET_AUTHENTICATION.getString()));
  }

  @Test
  void testAccessDenied() throws URISyntaxException {

    final var requester =
        builder
            .setupMetadata(
                new UsernamePasswordMetadata("wrong", "password"),
                MimeTypeUtils.parseMimeType(
                    WellKnownMimeType.MESSAGE_RSOCKET_AUTHENTICATION.getString()))
            .websocket(new URI(rsocketUri));

    StepVerifier.create(requester.route("get-mangas").retrieveFlux(Manga.class).next())
        .verifyError(RejectedSetupException.class);
  }

  @Test
  void testMangaRoute() throws URISyntaxException {

    final var requester = builder.websocket(new URI(rsocketUri));
    StepVerifier.create(requester.route("get-mangas").retrieveFlux(Manga.class).next())
        .expectNextCount(1)
        .verifyComplete();
  }

  @Test
  void testSingleMangaRoute() throws URISyntaxException {

    final var requester = builder.websocket(new URI(rsocketUri));

    final Mono<Manga> mono =
        requester
            .route("get-manga-0")
            .retrieveMono(Manga.class)
            .doOnError(Throwable::printStackTrace);
    StepVerifier.create(mono).expectNextCount(1).verifyComplete();
  }

  @Test
  void testChapterRoute() throws URISyntaxException {
    final var requester = builder.websocket(new URI(rsocketUri));

    final Mono<MangaChapters> mono =
        requester.route("get-chapters").data(0).retrieveMono(MangaChapters.class);

    StepVerifier.create(mono).expectNextCount(1).verifyComplete();
  }

  @Test
  void testPopular() throws URISyntaxException {
    final var requester = builder.websocket(new URI(rsocketUri));

    StepVerifier.create(requester.route("popular-manga").retrieveFlux(Manga.class).next())
        .expectNextCount(1)
        .verifyComplete();
  }

  @Test
  void testLatest() throws URISyntaxException {
    final var requester = builder.websocket(new URI(rsocketUri));

    StepVerifier.create(requester.route("latest-manga").retrieveFlux(Manga.class).next())
        .verifyComplete();
  }
}
