package com.mangasite.rsocket;

import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.invocation.MethodArgumentResolutionException;
import org.springframework.web.bind.annotation.ControllerAdvice;

import io.rsocket.exceptions.CustomRSocketException;
import io.rsocket.exceptions.RejectedException;
import reactor.core.publisher.Mono;

@ControllerAdvice
public class RSocketAdvice {

  @MessageExceptionHandler
  public Mono<RejectedException> invalidPayload(MethodArgumentResolutionException marex) {

    return Mono.error(new RejectedException("Invalid Payload", marex));
  }

  @MessageExceptionHandler
  public Mono<CustomRSocketException> customRsocketEX(CustomRSocketException ex) {

    return Mono.error(ex);
  }
}
