package com.mangasite.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.rsocket.RSocketMessageHandlerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
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
import org.springframework.web.method.ControllerAdviceBean;
import com.mangasite.domain.ControllerAdviceWrapper;
import com.mangasite.rsocket.RSocketAdvice;
import com.mangasite.services.TokenService;

@EnableRSocketSecurity
@EnableWebFluxSecurity
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
        User.withUsername(userUsername).password(encoder.encode(userPassword)).roles(USER).build();
    final var adminDetails =
        User.withUsername(adminUsername)
            .password(encoder.encode(adminPassword))
            .roles(USER, ADMIN)
            .build();

    return new MapReactiveUserDetailsService(userDetails, adminDetails);
  }

  // RSocket Security configuration
  @Bean
  public RSocketMessageHandlerCustomizer messageHandlerCustomizer() {
    return handler -> {
      handler
          .getArgumentResolverConfigurer()
          .addCustomResolver(new AuthenticationPrincipalArgumentResolver());

      handler.registerMessagingAdvice(
          new ControllerAdviceWrapper(new ControllerAdviceBean(new RSocketAdvice())));
    };
  }

  // RSocket JWT Security Config
  @Bean
  public PayloadSocketAcceptorInterceptor rsocketTokenAcceptor(
      RSocketSecurity security, TokenService tokenService) {
    security
        .authorizePayload(
            authorize ->
                authorize
                    .setup()
                    .authenticated()
                    .route("new-chapter")
                    .hasRole(ADMIN)
                    .route("update-page-channel")
                    .hasRole(USER)
                    .anyRequest()
                    .authenticated()
                    .anyExchange()
                    .permitAll())
        .jwt(jwtSpec -> jwtSpec.authenticationManager(tokenService::authenticateToken));

    return security.build();
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
