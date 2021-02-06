//package com.collabera.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.codec.cbor.Jackson2CborDecoder;
//import org.springframework.http.codec.cbor.Jackson2CborEncoder;
//import org.springframework.messaging.rsocket.RSocketStrategies;
//import org.springframework.messaging.rsocket.annotation.support.RSocketMessageHandler;
//import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;
//import org.springframework.security.config.annotation.rsocket.EnableRSocketSecurity;
//import org.springframework.web.util.pattern.PathPatternRouteMatcher;
//
//@Configuration
//@EnableRSocketSecurity
//@EnableReactiveMethodSecurity
//public class RSocketSecurityConfig {
//
//  @Bean
//  public RSocketMessageHandler rsocketMessageHandler() {
//    final RSocketMessageHandler handler = new RSocketMessageHandler();
//    handler.setRSocketStrategies(rsocketStrategies());
//    return handler;
//  }
//
//  @Bean
//  public RSocketStrategies rsocketStrategies() {
//    return RSocketStrategies.builder()
//        .encoders(encoders -> encoders.add(new Jackson2CborEncoder()))
//        .decoders(decoders -> decoders.add(new Jackson2CborDecoder()))
//        .routeMatcher(new PathPatternRouteMatcher())
//        .build();
//  }
//}