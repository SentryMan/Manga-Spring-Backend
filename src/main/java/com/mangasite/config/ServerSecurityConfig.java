package com.mangasite.config;

import static com.mangasite.domain.Constants.ADMIN;
import static com.mangasite.domain.Constants.USER;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.rsocket.EnableRSocketSecurity;
import org.springframework.security.config.annotation.rsocket.RSocketSecurity;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.rsocket.core.PayloadSocketAcceptorInterceptor;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

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
        userUsername
            .transform(User::withUsername)
            .password(encoder.encode(userPassword))
            .roles(USER)
            .build();

    final var adminDetails =
        adminUsername
            .transform(User::withUsername)
            .password(encoder.encode(adminPassword))
            .roles(USER, ADMIN)
            .build();

    return new MapReactiveUserDetailsService(userDetails, adminDetails);
  }

  // RSocket JWT Security Config
  @Bean
  public PayloadSocketAcceptorInterceptor rsocketTokenAcceptor(
      RSocketSecurity security, TokenService tokenService) {

    return security
        .authorizePayload(
            authorize ->
                authorize
                    .setup()
                    .authenticated()
                    .route("chapter-update-fnf-{id}")
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
    http.authorizeExchange()
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

  @Bean
  CorsConfigurationSource corsConfiguration() {
    final var corsConfig = new CorsConfiguration();
    corsConfig.applyPermitDefaultValues();
    corsConfig.addAllowedMethod(HttpMethod.GET);
    corsConfig.setAllowedOriginPatterns(
        List.of(
            "*manga-spring.com",
            "http://localhost:4200",
            "http://localhost:8080",
            "https://manga-spring--*.web.app",
            "https://manga-spring.firebaseapp.com",
            "https://manga-spring.web.app"));

    final var source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", corsConfig);
    return source;
  }
}
