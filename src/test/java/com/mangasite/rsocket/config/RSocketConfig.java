package com.mangasite.rsocket.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.codec.cbor.Jackson2CborDecoder;
import org.springframework.http.codec.cbor.Jackson2CborEncoder;
import org.springframework.messaging.rsocket.RSocketStrategies;
import org.springframework.security.rsocket.metadata.BearerTokenAuthenticationEncoder;

@Configuration
public class RSocketConfig {

  @Bean
  public RSocketStrategies rSocketStrategies() {
    return RSocketStrategies.builder()
        .encoder(new Jackson2CborEncoder())
        .encoder(new BearerTokenAuthenticationEncoder())
        .decoder(new Jackson2CborDecoder())
        .build();
  }
}
