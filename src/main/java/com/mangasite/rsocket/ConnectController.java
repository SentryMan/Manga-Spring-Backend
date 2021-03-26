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
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.function.TupleUtils;
import reactor.util.function.Tuples;

@Controller
public class ConnectController {

  private final ConnectService service;
  private final MapReactiveUserDetailsService userService;

  public ConnectController(ConnectService service, MapReactiveUserDetailsService userService) {
    this.service = service;
    this.userService = userService;
  }

  @ConnectMapping
  public Mono<Void> onConnect(
      @Payload String clientName,
      RSocketRequester rSocketRequester,
      @AuthenticationPrincipal String authName) {

    service.startConnectionLog(rSocketRequester, clientName);

    // If Client isn't an Admin, Query Client for Chapters being read
    return userService
        .findByUsername(authName)
        .map(UserDetails::getAuthorities)
        .doOnNext(
            auth ->
                System.out.println("Client: " + clientName + " is connected with Roles " + auth))
        .map(Collection::stream)
        .filter(s -> s.noneMatch(a -> a.getAuthority().contains("ADMIN")))
        .map(s -> Tuples.of(rSocketRequester, clientName))
        .doOnNext(TupleUtils.consumer(service::watchUserStream))
        .doOnNext(TupleUtils.consumer(service::requestDeviceInfo))
        .then();
  }

  @MessageExceptionHandler
  public Flux<RejectedException> invalidPayload(MethodArgumentResolutionException marex) {

    return Flux.error(new RejectedException("Invalid Payload", marex));
  }
}
