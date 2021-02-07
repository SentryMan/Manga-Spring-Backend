package com.mangasite.config;

import java.time.Duration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.Exceptions;
import reactor.util.retry.Retry;
import reactor.util.retry.Retry.RetrySignal;

@Configuration
public class WebClientRetryConfig {

  @Bean
  public Retry getRetryConfig() {
    return Retry.from(
        retrySignalFlux ->
            retrySignalFlux.delayElements(Duration.ofSeconds(1)).map(this::retryLogic));
  }

  private boolean retryLogic(RetrySignal rs) {

    if (rs.totalRetries() > 2) throw Exceptions.propagate(rs.failure());
    else if (rs.failure() instanceof ResponseStatusException) return true;
    else throw Exceptions.propagate(rs.failure());
  }
}
