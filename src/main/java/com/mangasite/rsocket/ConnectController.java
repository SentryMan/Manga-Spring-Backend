package com.mangasite.rsocket;

import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.invocation.MethodArgumentResolutionException;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.messaging.rsocket.annotation.ConnectMapping;
import org.springframework.stereotype.Controller;
import com.mangasite.domain.requests.SetupPayload;
import io.rsocket.exceptions.RejectedException;
import io.rsocket.exceptions.RejectedSetupException;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Controller
@RequiredArgsConstructor
public class ConnectController {

  private final AtomicInteger activeConnections;

  @ConnectMapping
  public Mono<Void> onConnect(
      RSocketRequester rSocketRequester, @Payload SetupPayload setupPayload) {

    if (!setupPayload.getPassword().contains("SECRET"))
      return Mono.error(
          new RejectedSetupException(
              "Connection to " + setupPayload.getClientName() + " is not authenticated"));
    else
      rSocketRequester
          .rsocket()
          .onClose()
          .doFirst(
              () -> {
                System.out.println("Client: " + setupPayload.getClientName() + " CONNECTED");
                System.out.println(
                    "Total Active Connections: " + activeConnections.incrementAndGet());
              })
          .doFinally(
              f -> {
                System.out.println("Client " + setupPayload.getClientName() + " DISCONNECTED");
                System.out.println(
                    "Total Active Connections: " + activeConnections.decrementAndGet());
              })
          .subscribe(
              null,
              error ->
                  // Warn when channels are closed by clients
                  System.err.println(
                      "Client " + setupPayload.getClientName() + " Closed Connection With Error"),
              () -> System.out.println("Connection Closed"));

    return Mono.empty();
  }

  @MessageExceptionHandler
  public Flux<RejectedException> invalidPayload(MethodArgumentResolutionException marex) {

    return Flux.error(new RejectedException("Invalid Payload", marex));
  }
}
