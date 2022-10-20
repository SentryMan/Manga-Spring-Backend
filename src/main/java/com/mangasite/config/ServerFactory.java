package com.mangasite.config;

import static com.mangasite.security.AppRole.ADMIN;
import static com.mangasite.security.AppRole.USER;

import java.util.List;

import org.springframework.http.HttpMethod;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import io.avaje.inject.Bean;
import io.avaje.inject.Factory;

@Factory
public class ServerFactory {

  @Bean
  public MapReactiveUserDetailsService userDetailsService() {

    final var encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
    final var userDetails =
        USER.getUsername()
            .transform(User::withUsername)
            .password(encoder.encode(USER.getPassword()))
            .roles(USER.name())
            .build();

    final var adminDetails =
        ADMIN
            .getUsername()
            .transform(User::withUsername)
            .password(encoder.encode(ADMIN.getPassword()))
            .roles(USER.name(), ADMIN.name())
            .build();

    return new MapReactiveUserDetailsService(userDetails, adminDetails);
  }

  // CORS and HTTP Security

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
