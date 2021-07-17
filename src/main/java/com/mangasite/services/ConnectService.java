package com.mangasite.services;

import static com.mangasite.domain.Constants.ACTIVE_CONNECTIONS;
import static com.mangasite.domain.Constants.CLIENT_MANGA_MAP;
import static com.mangasite.domain.Constants.CLIENT_REQUESTER_MAP;

import java.time.Duration;
import java.time.Instant;
import java.util.Map.Entry;

import org.springframework.http.MediaType;
import org.springframework.messaging.rsocket.RSocketRequester;

import com.mangasite.domain.DeviceInfo;
import com.mangasite.domain.MangaChapters;
import com.mangasite.domain.requests.ServerMessage;

import io.rsocket.RSocket;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Class That Handles RSocket Connections
 *
 * @author Josiah
 */
// @Service
public class ConnectService {

  private static final String CLIENT = "Client: ";

  /**
   * Logs Rsocket Connect/Disconnect events
   *
   * @param rSocketRequester The clients RSocket
   * @param clientName The name of the client
   */
  public void startConnectionLog(RSocketRequester rSocketRequester, String clientName) {
    final var startTime = Instant.now();
    rSocketRequester
        .rsocketClient()
        .source()
        .flatMap(RSocket::onClose)
        .doFirst(
            () -> {
              System.out.println(CLIENT + clientName + " CONNECTED");
              CLIENT_REQUESTER_MAP.put(clientName, rSocketRequester);
              System.out.println(
                  "Total Active Connections: " + ACTIVE_CONNECTIONS.incrementAndGet());
            })
        .doFinally(
            f -> {
              final var connectionLifetime =
                  Duration.between(startTime, Instant.now()).getSeconds();

              System.out.println(
                  CLIENT + clientName + " DISCONNECTED after " + connectionLifetime + " Seconds");
              System.out.println(
                  "Total Remaining Connections: " + ACTIVE_CONNECTIONS.decrementAndGet());
              CLIENT_REQUESTER_MAP.remove(clientName);
              CLIENT_MANGA_MAP.remove(clientName);
            })
        .subscribe(
            null,
            error ->
                // Warn when channels are closed by clients
                System.err.println(CLIENT + clientName + " Closed Connection With Error"),
            () -> System.out.println("Connection Closed"));
  }

  /** Fires off chapter updates to relevant clients */
  public Mono<Void> fireAndForgetChapterUpdate(MangaChapters updatedChapter) {

    return Flux.fromIterable(CLIENT_MANGA_MAP.entrySet())
        .filter(es -> es.getValue().contains(updatedChapter.getMangaName()))
        .map(Entry::getKey)
        .doOnNext(client -> System.out.println("Sending Updated Chapter to Client: " + client))
        .map(CLIENT_REQUESTER_MAP::get)
        .flatMap(
            requester ->
                requester
                    .metadata(
                        new ServerMessage("Chapters Modified for " + updatedChapter.getMangaName()),
                        MediaType.APPLICATION_JSON)
                    .data(updatedChapter)
                    .send())
        .then();
  }

  /**
   * Request User chapter information from client
   *
   * @param rSocketRequester The clients RSocket
   * @param clientName The name of the client
   */
  public void watchUserStream(RSocketRequester rSocketRequester, String clientName) {

    rSocketRequester
        .metadata(
            new ServerMessage("Yo Client, tell me what you're reading"), MediaType.APPLICATION_JSON)
        .retrieveFlux(String.class)
        .doOnNext(n -> System.out.println(CLIENT + clientName + " Is Currently Viewing: " + n))
        .subscribe(n -> CLIENT_MANGA_MAP.put(clientName, n), ex -> {});
  }

  /**
   * Request Device Information from client
   *
   * @param rSocketRequester The clients RSocket
   * @param clientName The name of the client
   */
  public void requestDeviceInfo(RSocketRequester rSocketRequester, String clientName) {

    rSocketRequester
        .metadata(new ServerMessage("What device is this?"), MediaType.APPLICATION_JSON)
        .retrieveMono(DeviceInfo.class)
        .subscribe(n -> System.out.println(CLIENT + clientName + " Is using " + n));
  }
}
