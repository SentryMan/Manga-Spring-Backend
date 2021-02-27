package com.mangasite.config;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.boot.rsocket.server.RSocketServerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.rsocket.RSocketRequester;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.ResourceHandlerRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import io.rsocket.core.Resume;
import io.rsocket.resume.InMemoryResumableFramesStore;

@Configuration
public class ServerConfig implements WebFluxConfigurer {

  @Bean
  RSocketServerCustomizer resumeCustomizer() {
    final var resumeConfig =
        new Resume()
            .cleanupStoreOnKeepAlive()
            .storeFactory(t -> new InMemoryResumableFramesStore("server", 200_000));
    return server -> server.resume(resumeConfig);
  }

  @Bean
  AtomicInteger activeConnections() {
    return new AtomicInteger();
  }

  @Bean
  Map<String, RSocketRequester> requesterMap() {
    return new HashMap<>();
  }

  @Override
  public void addCorsMappings(CorsRegistry registry) {

    WebFluxConfigurer.super.addCorsMappings(registry);
    registry
        .addMapping("/**")
        .allowedOrigins("*")
        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH");
  }

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
    registry.addResourceHandler("/").addResourceLocations("classpath:/static/index.html");
  }
}
