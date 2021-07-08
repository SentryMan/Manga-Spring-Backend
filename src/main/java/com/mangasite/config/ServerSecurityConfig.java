package com.mangasite.config;

import static com.mangasite.domain.Constants.ADMIN;
import static com.mangasite.domain.Constants.USER;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.security.config.annotation.rsocket.EnableRSocketSecurity;
import org.springframework.security.config.annotation.rsocket.RSocketSecurity;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.rsocket.core.PayloadSocketAcceptorInterceptor;
import org.springframework.security.web.server.SecurityWebFilterChain;

import com.mangasite.services.TokenService;

@EnableRSocketSecurity
@EnableWebFluxSecurity
public class ServerSecurityConfig {

  @Value("${roles.admin.username}")
  String adminUsername;

  @Value("${roles.admin.password}")
  String adminPassword;

  @Value("${roles.user.username}")
  String userUsername;

  @Value("${roles.user.password}")
  String userPassword;

  // Role Configuration
  @Bean
  public MapReactiveUserDetailsService userDetailsService() {

    final var encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
    final var userDetails =
        User.withUsername(userUsername).password(encoder.encode(userPassword)).roles(USER).build();
    final var adminDetails =
        User.withUsername(adminUsername)
            .password(encoder.encode(adminPassword))
            .roles(USER, ADMIN)
            .build();

    return new MapReactiveUserDetailsService(userDetails, adminDetails);
  }

  // RSocket JWT Security Config

  public PayloadSocketAcceptorInterceptor rsocketTokenAcceptor(
      RSocketSecurity security, TokenService tokenService) {

    return security
        .authorizePayload(
            authorize ->
                authorize
                    .setup()
                    .authenticated()
                    .route("new-chapter")
                    .hasRole(ADMIN)
                    .route("update-page-channel")
                    .hasRole(ADMIN)
                    .anyRequest()
                    .authenticated()
                    .anyExchange()
                    .permitAll())
        .jwt(jwtSpec -> jwtSpec.authenticationManager(tokenService::authenticateToken))
        .build();
  }

  // CORS and HTTP Security
  @Bean
  @Primary
  public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
    http.csrf()
        .disable()
        .authorizeExchange()
        .pathMatchers("/api/getToken")
        .hasRole(USER)
        .pathMatchers("/api/**")
        .hasRole(ADMIN)
        .pathMatchers("/**")
        .permitAll()
        .and()
        .httpBasic();
    return http.build();
  }
}
