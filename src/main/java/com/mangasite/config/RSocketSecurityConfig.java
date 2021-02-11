package com.mangasite.config;

import org.springframework.context.annotation.Bean;
import org.springframework.messaging.rsocket.RSocketStrategies;
import org.springframework.messaging.rsocket.annotation.support.RSocketMessageHandler;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;
import org.springframework.security.config.annotation.rsocket.EnableRSocketSecurity;
import org.springframework.security.config.annotation.rsocket.RSocketSecurity;
import org.springframework.security.messaging.handler.invocation.reactive.AuthenticationPrincipalArgumentResolver;
import org.springframework.security.rsocket.core.PayloadSocketAcceptorInterceptor;

@EnableRSocketSecurity
@EnableReactiveMethodSecurity
public class RSocketSecurityConfig {

  @Bean
  public RSocketMessageHandler messageHandler(RSocketStrategies strategies) {
    final RSocketMessageHandler handler = new RSocketMessageHandler();
    handler
        .getArgumentResolverConfigurer()
        .addCustomResolver(new AuthenticationPrincipalArgumentResolver());
    handler.setRSocketStrategies(strategies);
    return handler;
  }

  @Bean
  public PayloadSocketAcceptorInterceptor authorization(RSocketSecurity security) {
    security
        .authorizePayload(authorize -> authorize.setup().hasRole("USER").anyExchange().permitAll())
        .simpleAuthentication(Customizer.withDefaults());
    return security.build();
  }
}
