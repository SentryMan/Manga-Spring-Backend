package com.mangasite.rsocket;

import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.invocation.MethodArgumentResolutionException;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.messaging.rsocket.annotation.ConnectMapping;
import org.springframework.stereotype.Controller;
import com.mangasite.domain.requests.SetupPayload;
import io.rsocket.exceptions.RejectedSetupException;
import reactor.core.publisher.Mono;

@Controller
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
          .doFirst(() -> System.out.println("Client:  CONNECTED."))
          .doOnError(
              error ->
                  // Warn when channels are closed by clients
                  System.out.println("Channel to client CLOSED"))
          .doFinally(f -> System.out.println("Client DISCONNECTED"))
          .subscribe(
              null,
              error -> System.err.println("Client Closed With Error"),
              () -> System.out.println("Connection Closed"));

    return Mono.empty();
  }

  @MessageExceptionHandler(MethodArgumentResolutionException.class)
  public Mono<RejectedSetupException> inavlidPayload() {

    return Mono.error(new RejectedSetupException("Invalid Setup Payload"));
  }
}
