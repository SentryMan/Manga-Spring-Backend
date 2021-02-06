package com.collabera.controller;

import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.messaging.rsocket.annotation.ConnectMapping;
import com.collabera.models.requests.SetupPayload;
import io.rsocket.exceptions.RejectedSetupException;
import reactor.core.publisher.Mono;

public class ConnectController {

  @ConnectMapping
  public Mono<Void> onConnect(
      RSocketRequester rSocketRequester, @Payload SetupPayload setupPayload) {

    if (!setupPayload.getPassword().contains("SECRET"))
      return Mono.error(new RejectedSetupException("Connection is not authenticated"));
    else
      rSocketRequester
      .rsocket()
      .onClose()
      .doFirst(
          () -> System.out.println("Client: " + setupPayload.getClientName() + " CONNECTED."))
      .doOnError(
          error ->
          // Warn when channels are closed by clients
          System.out.println(
              "Channel to client " + setupPayload.getClientName() + " CLOSED"))
      .doFinally(
          f -> System.out.println("Client " + setupPayload.getClientName() + " DISCONNECTED"))
      .subscribe(
          null,
          error -> System.err.println("Client Closed With Error"),
          () -> System.out.println("Connection Closed"));

    return Mono.empty();
  }
}
