package com.mangasite.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpMethod;
import org.springframework.messaging.rsocket.RSocketStrategies;
import org.springframework.messaging.rsocket.annotation.support.RSocketMessageHandler;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity;
import org.springframework.security.config.annotation.rsocket.EnableRSocketSecurity;
import org.springframework.security.config.annotation.rsocket.RSocketSecurity;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.messaging.handler.invocation.reactive.AuthenticationPrincipalArgumentResolver;
import org.springframework.security.rsocket.core.PayloadSocketAcceptorInterceptor;
import org.springframework.security.web.server.SecurityWebFilterChain;

@EnableRSocketSecurity
@EnableWebFluxSecurity
@EnableReactiveMethodSecurity
public class ServerSecurityConfig {

  public static final String ADMIN = "ADMIN";
  public static final String USER = "USER";

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
        User.withUsername(userUsername).password(encoder.encode("Reference")).roles(USER).build();
    final var adminDetails =
        User.withUsername(adminUsername)
            .password(encoder.encode(adminPassword))
            .roles(USER, ADMIN)
            .build();

    return new MapReactiveUserDetailsService(userDetails, adminDetails);
  }

  // RSocket Security configuration
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
        .authorizePayload(
            authorize -> authorize.setup().hasAnyRole(USER, ADMIN).anyExchange().permitAll())
        .simpleAuthentication(Customizer.withDefaults());
    return security.build();
  }

  // CORS and HTTP Security
  @Bean
  @Primary
  public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
    http.csrf()
        .disable()
        .authorizeExchange()
        .pathMatchers("/api/**")
        .hasAnyRole(USER, ADMIN)
        .pathMatchers(HttpMethod.GET, "admin/KatanaFish")
        .hasRole(ADMIN)
        .pathMatchers("/**")
        .permitAll()
        .and()
        .httpBasic();
    return http.build();
  }
}
