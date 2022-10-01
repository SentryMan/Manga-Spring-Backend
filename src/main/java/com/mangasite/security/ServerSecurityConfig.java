package com.mangasite.security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.rsocket.EnableRSocketSecurity;
import org.springframework.security.config.annotation.rsocket.RSocketSecurity;
import org.springframework.security.rsocket.core.PayloadSocketAcceptorInterceptor;

import com.mangasite.services.TokenService;

import jakarta.inject.Singleton;

@Singleton
@EnableRSocketSecurity
public class ServerSecurityConfig {

  // RSocket JWT Security Config
  @Bean
  public PayloadSocketAcceptorInterceptor rsocketTokenAcceptor(RSocketSecurity security) {

    return security
        .authorizePayload(
            authorize ->
                authorize
                    .setup()
                    .authenticated()
                    .anyRequest()
                    .authenticated()
                    .anyExchange()
                    .permitAll())
        .jwt(jwtSpec -> jwtSpec.authenticationManager(TokenService::authenticateToken))
        .build();
  }
}
