package com.mangasite.config;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.rsocket.server.RSocketServerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.ResourceHandlerRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.mangasite.domain.lease.LeaseManager;
import com.mangasite.domain.lease.LimitBasedLeaseSender;
import com.netflix.concurrency.limits.limit.VegasLimit;

@Configuration
public class ServerConfig implements WebFluxConfigurer {

  private static final int CONCURRENT_WORKERS_COUNT = 6;
  private static final int QUEUE_CAPACITY = 1000;
  private static final int ttl = 10_000;

  @Bean
  RSocketServerCustomizer leaseCustomizer() {

    LeaseManager leaseManager = new LeaseManager(CONCURRENT_WORKERS_COUNT, ttl);
    return rsocketServer -> {
      rsocketServer.lease(
          config ->
              config.sender(
                  new LimitBasedLeaseSender(
                      UUID.randomUUID().toString(),
                      leaseManager,
                      VegasLimit.newBuilder()
                          .initialLimit(CONCURRENT_WORKERS_COUNT)
                          .maxConcurrency(QUEUE_CAPACITY)
                          .build())));
    };
  }

  @Bean
  public AtomicInteger activeConnections() {
    return new AtomicInteger();
  }

  @Bean
  public Map<String, RSocketRequester> requesterMap() {
    return new HashMap<>();
  }

  @Bean
  public Map<String, String> clientMangaMap() {
    return new HashMap<>();
  }

  @Override
  public void addCorsMappings(CorsRegistry registry) {

    WebFluxConfigurer.super.addCorsMappings(registry);
    registry
        .addMapping("/**")
        .allowedOrigins("*")
        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH");
  }

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/**").addResourceLocations("classpath:/static/frontend/");
    registry.addResourceHandler("/").addResourceLocations("classpath:/static/frontend/index.html");
  }

  @Bean
  public RouterFunction<ServerResponse> robotstxtRouter(
      @Value("classpath:/static/robots.txt") Resource html) {
    return route(
        GET("/robots.txt"),
        request -> ServerResponse.ok().contentType(MediaType.TEXT_HTML).bodyValue(html));
  }
}
