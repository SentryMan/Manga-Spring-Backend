package com.mangasite.filters;

import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Component
public class SpaWebFilter implements WebFilter {

  /**
   * This effectively serves as a View Controller by mutating non-api paths into an Angular route
   */
  @Override
  public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
    final String path = exchange.getRequest().getURI().getPath();
    if (!path.startsWith("/api")
            && path.matches("[^\\\\.]*")
            && !path.startsWith("/image")
            && !path.startsWith("/db")
        || path.startsWith("/manga"))
      return chain.filter(
          exchange
              .mutate()
              .request(exchange.getRequest().mutate().path("/index.html").build())
              .build());

    return chain.filter(exchange);
  }
}
