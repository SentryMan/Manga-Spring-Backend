package com.mangasite.config;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.rsocket.server.RSocketServerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.config.ResourceHandlerRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import io.rsocket.core.Resume;
import reactor.util.retry.Retry;

@Configuration
public class ServerConfig implements WebFluxConfigurer {

  public static final RSocketServerCustomizer serverCustomizer() {

    final var resume =
        new Resume()
            .cleanupStoreOnKeepAlive()
            .retry(
                Retry.fixedDelay(Long.MAX_VALUE, Duration.ofSeconds(1))
                    .doBeforeRetry(s -> System.out.println("Disconnected. Trying to resume...")));

    return rsocketServer -> rsocketServer.resume(resume);
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
