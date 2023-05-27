package com.mangasite.rsocket;

import static com.mangasite.security.AppRole.ADMIN;
import static com.mangasite.security.AppRole.getByUserName;
import static reactor.function.TupleUtils.consumer;
import java.util.function.Predicate;

import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.messaging.rsocket.annotation.ConnectMapping;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;

import com.mangasite.services.ConnectService;

import reactor.core.publisher.Mono;
import reactor.util.function.Tuples;

@Controller
public class ConnectController {

  @ConnectMapping
  public Mono<Void> onConnect(
      @Payload String clientName,
      @AuthenticationPrincipal String authName,
      RSocketRequester rSocketRequester) {

    // Query Client for Current Activity
    ConnectService.startConnectionLog(rSocketRequester, clientName);
    return Mono.just(getByUserName(authName))
        .doOnNext(
            auth ->
                System.out.println(
                    "Client: " + clientName + " is connected with Roles " + auth.name()))
        // Query Site for Reading Activity
        .filter(Predicate.not(ADMIN::equals))
        .map(s -> Tuples.of(rSocketRequester, clientName))
        .doOnNext(consumer(ConnectService::watchUserStream))
        .doOnNext(consumer(ConnectService::requestDeviceInfo))
        .then();
  }
}
