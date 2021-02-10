package com.mangasite.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;

@Configuration
public class WebClientConfig {

  @Bean
  WebClient webclientbuilder() {

    final var connector = new ReactorClientHttpConnector(HttpClient.create().followRedirect(true));
    return WebClient.builder().clientConnector(connector).build();
  }
}
