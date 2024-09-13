package com.mangasite.security;

import static com.mangasite.security.AppRole.ADMIN;
import static com.mangasite.security.AppRole.USER;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.rsocket.EnableRSocketSecurity;
import org.springframework.security.config.annotation.rsocket.RSocketSecurity;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.rsocket.core.PayloadSocketAcceptorInterceptor;
import org.springframework.security.web.server.SecurityWebFilterChain;

import com.mangasite.services.TokenService;

@EnableWebFluxSecurity
@EnableRSocketSecurity
public class ServerSecurityConfig {

  @Bean
  public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
    http.authorizeExchange()
        .pathMatchers("/api/getToken")
        .hasRole(USER.name())
        .pathMatchers("/api/**")
        .hasRole(ADMIN.name())
        .pathMatchers("/**")
        .permitAll()
        .and()
        .httpBasic();
    return http.build();
  }

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
