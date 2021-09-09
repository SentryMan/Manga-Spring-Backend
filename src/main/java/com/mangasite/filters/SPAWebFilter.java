package com.mangasite.filters;

import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;

import reactor.core.publisher.Mono;

// @Component
public class SPAWebFilter implements WebFilter {

  /** Redirects Angular requests to Angular Router */
  @Override
  public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
    final var path = exchange.getRequest().getURI().getPath();
    if (path.startsWith("/manga") || !path.startsWith("/api") && path.matches("[^\\\\.]*"))
      return chain.filter(
          exchange
              .mutate()
              .request(exchange.getRequest().mutate().path("/index.html").build())
              .build());

    return chain.filter(exchange);
  }
}
