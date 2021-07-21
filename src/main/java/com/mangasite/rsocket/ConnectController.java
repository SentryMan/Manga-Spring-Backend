package com.mangasite.rsocket;

import static com.mangasite.domain.Constants.ADMIN;

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
import reactor.function.TupleUtils;
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
      RSocketRequester rSocketRequester,
      @AuthenticationPrincipal String authName) {

    ConnectService.startConnectionLog(rSocketRequester, clientName);

    // If Client isn't an Admin, Query Client for Chapters being read
    return userService
        .findByUsername(authName)
        .map(UserDetails::getAuthorities)
        .doOnNext(
            auth ->
                System.out.println("Client: " + clientName + " is connected with Roles " + auth))
        .map(Collection::stream)
        .filter(s -> s.noneMatch(a -> a.getAuthority().contains(ADMIN)))
        .map(s -> Tuples.of(rSocketRequester, clientName))
        .doOnNext(TupleUtils.consumer(ConnectService::watchUserStream))
        .doOnNext(TupleUtils.consumer(ConnectService::requestDeviceInfo))
        .then();
  }
}
