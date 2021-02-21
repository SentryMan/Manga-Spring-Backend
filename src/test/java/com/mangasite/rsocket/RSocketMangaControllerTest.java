package com.mangasite.rsocket;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.Duration;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.security.rsocket.metadata.UsernamePasswordMetadata;
import org.springframework.util.MimeTypeUtils;
import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import io.rsocket.exceptions.RejectedSetupException;
import io.rsocket.metadata.WellKnownMimeType;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;
import reactor.util.retry.Retry;

@SpringBootTest
class RSocketMangaControllerTest {

  @Autowired RSocketRequester.Builder builder;

  String rsocketUri = "ws://localhost:6969/rsocket";

  @BeforeEach
  void before() {

    builder =
        builder
            .rsocketConnector(
                rSocketConnector ->
                    rSocketConnector.reconnect(Retry.fixedDelay(2, Duration.ofSeconds(2))))
            .dataMimeType(MediaType.APPLICATION_CBOR)
            .setupData("Test")
            .setupMetadata(
                new UsernamePasswordMetadata("Jojo", "Reference"),
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
            .route("get-manga")
            .data(0)
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
