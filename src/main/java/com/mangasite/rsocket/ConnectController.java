package com.mangasite.rsocket;

import static com.mangasite.domain.Constants.ADMIN;
import static reactor.function.TupleUtils.consumer;

import java.util.Collection;

import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.messaging.rsocket.annotation.ConnectMapping;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;

import com.mangasite.services.ConnectService;

import reactor.core.publisher.Mono;
import reactor.util.function.Tuples;

@Controller
public class ConnectController {

  private final MapReactiveUserDetailsService userService;

  public ConnectController(MapReactiveUserDetailsService userService) {
    this.userService = userService;
  }

  @ConnectMapping
  public Mono<Void> onConnect(
      @Payload String clientName,
      @AuthenticationPrincipal String authName,
      RSocketRequester rSocketRequester) {

    // Query Client for Current Activity
    ConnectService.startConnectionLog(rSocketRequester, clientName);

    return userService
        .findByUsername(authName)
        .map(UserDetails::getAuthorities)
        .doOnNext(
            auth ->
                System.out.println("Client: " + clientName + " is connected with Roles " + auth))
        .map(Collection::stream)
        // Query Site for Reading Activity
        .filter(s -> s.noneMatch(a -> a.getAuthority().contains(ADMIN)))
        .map(s -> Tuples.of(rSocketRequester, clientName))
        .doOnNext(consumer(ConnectService::watchUserStream))
        .doOnNext(consumer(ConnectService::requestDeviceInfo))
        .then();
  }
}
