package com.mangasite.config;

import java.time.Duration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.util.retry.Retry;

@Configuration
public class WebClientRetryConfig {

  @Bean
  public Retry getRetryConfig() {
    return Retry.fixedDelay(2, Duration.ofSeconds(1))
        .onRetryExhaustedThrow((spec, rs) -> rs.failure());
  }
}
