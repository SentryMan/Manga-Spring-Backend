package com.mangasite.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.web.server.SecurityWebFilterChain;

@EnableWebFluxSecurity
public class WebFluxSecurityConfig {

  @Bean
  @Primary
  public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
    http.csrf()
        .disable()
        .authorizeExchange()
        .pathMatchers("/api/**")
        .hasRole("USER")
        .pathMatchers(HttpMethod.GET, "admin/KatanaFish")
        .hasRole("ADMIN")
        .pathMatchers("/**")
        .permitAll()
        .and()
        .httpBasic();
    return http.build();
  }

  @Bean
  public MapReactiveUserDetailsService userDetailsService() {

    final var encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
    final var userDetails =
        User.withUsername("Jojo").password(encoder.encode("Reference")).roles("USER").build();
    final var adminDetails =
        User.withUsername("Admin").password(encoder.encode("Betta")).roles("USER", "ADMIN").build();

    return new MapReactiveUserDetailsService(userDetails, adminDetails);
  }
}
