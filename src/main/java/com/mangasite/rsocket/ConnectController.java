package com.mangasite.rsocket;

import java.util.Collection;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.invocation.MethodArgumentResolutionException;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.messaging.rsocket.annotation.ConnectMapping;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import com.mangasite.services.ConnectService;
import io.rsocket.exceptions.RejectedException;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Controller
@RequiredArgsConstructor
public class ConnectController {

  private final ConnectService service;
  private final MapReactiveUserDetailsService userService;

  @ConnectMapping
  public Mono<Void> onConnect(
      @Payload String clientName,
      RSocketRequester rSocketRequester,
      @AuthenticationPrincipal String authName) {

    service.handleIncomingConnection(rSocketRequester, clientName);

    return userService
        .findByUsername(authName)
        .map(UserDetails::getAuthorities)
        .map(Collection::stream)
        .filter(s -> s.noneMatch(a -> a.getAuthority().contains("ADMIN")))
        .doOnNext(s -> service.watchUserStream(rSocketRequester, clientName))
        .then();
  }

  @MessageExceptionHandler
  public Flux<RejectedException> invalidPayload(MethodArgumentResolutionException marex) {

    return Flux.error(new RejectedException("Invalid Payload", marex));
  }
}
