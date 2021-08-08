package com.mangasite.rsocket;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;

import java.net.URISyntaxException;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import com.mangasite.domain.Manga;
import com.mangasite.services.MangaService;

import io.rsocket.exceptions.CustomRSocketException;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.test.StepVerifier;

@ExtendWith(MockitoExtension.class)
class RSocketMangaControllerTest {

  MangaService mockservice = mock(MangaService.class);

  RSocketMangaController controller = new RSocketMangaController(mockservice);

  @Test
  void testGetAll() throws URISyntaxException {
    doReturn(Flux.empty()).when(mockservice).findAll();

    StepVerifier.create(controller.getAll()).verifyComplete();
    doReturn(Flux.just(mock(Manga.class), mock(Manga.class), mock(Manga.class)))
        .when(mockservice)
        .findAll();

    StepVerifier.create(controller.getAll()).expectNextCount(3).verifyComplete();
  }

  @Test
  void testGetbyID() throws URISyntaxException {
    doReturn(Mono.empty()).when(mockservice).findManga(0);

    StepVerifier.create(controller.getMangaByID(0))
        .verifyErrorMatches(
            ex -> ex instanceof final CustomRSocketException crsex && crsex.errorCode()==0x404);

    doReturn(Mono.just(mock(Manga.class)))
        .when(mockservice)
        .findManga(0);

    StepVerifier.create(controller.getMangaByID(0)).expectNextCount(1).verifyComplete();
  }

  @Test
  void testPopular() throws URISyntaxException {
	    doReturn(Flux.empty()).when(mockservice).findPopular();

	    StepVerifier.create(controller.getPopular()).verifyComplete();
	    doReturn(Flux.just(mock(Manga.class), mock(Manga.class), mock(Manga.class)))
	        .when(mockservice)
	        .findPopular();

	    StepVerifier.create(controller.getPopular()).expectNextCount(3).verifyComplete();

  }

  @Test
  void testLatest() throws URISyntaxException {

	    doReturn(Flux.empty()).when(mockservice).findLatest();

	    StepVerifier.create(controller.getLatest()).verifyComplete();

	    doReturn(Flux.just(mock(Manga.class), mock(Manga.class), mock(Manga.class)))
	        .when(mockservice)
	        .findLatest();

	    StepVerifier.create(controller.getLatest()).expectNextCount(3).verifyComplete();

  }

  @Test
  void testChangeStream() throws URISyntaxException {

	    doReturn(Flux.empty()).when(mockservice).watchDBChanges();

	    StepVerifier.create(controller.watchForDBChanges()).verifyComplete();

	    doReturn(Flux.just(mock(Manga.class), mock(Manga.class), mock(Manga.class)))
	        .when(mockservice)
	        .watchDBChanges();

	    StepVerifier.create(controller.watchForDBChanges()).expectNextCount(3).verifyComplete();
  	}

  @Test
  void testPatch() throws URISyntaxException {

    doNothing().when(mockservice).patchChapterNames(0, null);

    StepVerifier.create(Mono.fromRunnable(()->controller.patchChapterNames(0, null))).verifyComplete();
    }
}
