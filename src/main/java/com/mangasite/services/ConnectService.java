package com.mangasite.services;

import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.stereotype.Service;
import io.rsocket.RSocket;
import lombok.RequiredArgsConstructor;

/**
 * Service Class That Returns Manga Chapters and Sets Missing IDs in a pinch
 *
 * @author Josiah
 */
@Service
@RequiredArgsConstructor
public class ConnectService {

  private static final String CLIENT = "Client: ";
  private final AtomicInteger activeConnections;
  private final Map<String, RSocketRequester> responderMap;

  public void handleIncomingConnection(RSocketRequester rSocketRequester, String clientName) {

    rSocketRequester
        .rsocketClient()
        .source()
        .flatMap(RSocket::onClose)
        .doFirst(
            () -> {
              System.out.println(CLIENT + clientName + " CONNECTED");
              System.out.println(
                  "Total Active Connections: " + activeConnections.incrementAndGet());
            })
        .doFinally(
            f -> {
              System.out.println(CLIENT + clientName + " DISCONNECTED");
              System.out.println(
                  "Total Active Connections: " + activeConnections.decrementAndGet());
              responderMap.remove(clientName);
            })
        .subscribe(
            null,
            error ->
                // Warn when channels are closed by clients
                System.err.println(CLIENT + clientName + " Closed Connection With Error"),
            () -> System.out.println("Connection Closed"));
  }

  public void watchUserStream(RSocketRequester rSocketRequester, String clientName) {

    rSocketRequester
        .route("")
        .retrieveFlux(String.class)
        .subscribe(
            n -> System.out.println(CLIENT + clientName + " Is Currently Viewing: " + n), ex -> {});
  }
}