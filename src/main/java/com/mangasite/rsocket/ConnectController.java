package com.mangasite.rsocket;

import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.invocation.MethodArgumentResolutionException;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.messaging.rsocket.annotation.ConnectMapping;
import org.springframework.stereotype.Controller;
import io.rsocket.exceptions.RejectedException;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Controller
@RequiredArgsConstructor
public class ConnectController {

  private final AtomicInteger activeConnections;

  @ConnectMapping
  public Mono<Void> onConnect(RSocketRequester rSocketRequester, @Payload String clientName) {

    rSocketRequester
        .rsocket()
        .onClose()
        .doFirst(
            () -> {
              System.out.println("Client: " + clientName + " CONNECTED");
              System.out.println(
                  "Total Active Connections: " + activeConnections.incrementAndGet());
            })
        .doFinally(
            f -> {
              System.out.println("Client " + clientName + " DISCONNECTED");
              System.out.println(
                  "Total Active Connections: " + activeConnections.decrementAndGet());
            })
        .subscribe(
            null,
            error ->
                // Warn when channels are closed by clients
                System.err.println("Client " + clientName + " Closed Connection With Error"),
            () -> System.out.println("Connection Closed"));

    return Mono.empty();
  }

  @MessageExceptionHandler
  public Flux<RejectedException> invalidPayload(MethodArgumentResolutionException marex) {

    return Flux.error(new RejectedException("Invalid Payload", marex));
  }
}
