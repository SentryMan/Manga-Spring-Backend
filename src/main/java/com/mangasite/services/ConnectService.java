package com.mangasite.services;

import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.stereotype.Service;
import io.rsocket.RSocket;
import lombok.RequiredArgsConstructor;

/**
 * Service Class That Handles RSocket Connections
 *
 * @author Josiah
 */
@Service
@RequiredArgsConstructor
public class ConnectService {

  private static final String CLIENT = "Client: ";
  private final AtomicInteger activeConnections;
  private final Map<String, RSocketRequester> responderMap;

  /**
   * Logs Rsocket Connect/Discconect events
   *
   * @param rSocketRequester The clients RSocket
   * @param clientName The name of the client
   */
  public void startConnectionLog(RSocketRequester rSocketRequester, String clientName) {

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

  /**
   * Request User chapter information from client
   *
   * @param rSocketRequester The clients RSocket
   * @param clientName The name of the client
   */
  public void watchUserStream(RSocketRequester rSocketRequester, String clientName) {

    rSocketRequester
        .route("Yo Client, what's good?")
        .retrieveFlux(String.class)
        .subscribe(
            n -> System.out.println(CLIENT + clientName + " Is Currently Viewing: " + n), ex -> {});
  }
}
