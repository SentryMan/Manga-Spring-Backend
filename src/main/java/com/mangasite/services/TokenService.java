package com.mangasite.services;

import static io.jsonwebtoken.SignatureAlgorithm.HS256;

import java.security.Principal;
import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.rsocket.exceptions.RejectedSetupException;
import jakarta.annotation.PostConstruct;
import reactor.core.publisher.Mono;

@Service
public class TokenService {

  @Value("${jwt.validity:1800}")
  private int jwtTokenValidity;

  @Value("${jwt.secret.key:secretkey}")
  private String key;

  private final MapReactiveUserDetailsService userService;

  private JwtParser parser;

  public TokenService(MapReactiveUserDetailsService userService) {
    this.userService = userService;
  }

  @PostConstruct
  void init() {
    parser = key.transform(Jwts.parser()::setSigningKey);
  }

  public Mono<ServerResponse> getToken(ServerRequest request) {
    return request
        .principal()
        .map(Principal::getName)
        .flatMap(userService::findByUsername)
        .map(
            userDetails ->
                Jwts.builder()
                    .setClaims(new HashMap<>())
                    .setSubject(userDetails.getUsername())
                    .setIssuedAt(new Date(System.currentTimeMillis()))
                    .setExpiration(new Date(System.currentTimeMillis() + jwtTokenValidity * 100))
                    .signWith(HS256, key)
                    .compact())
        .flatMap(ServerResponse.ok()::bodyValue);
  }

  public Mono<Authentication> authenticateToken(Authentication authentication) {

    return authentication
        .getCredentials()
        .toString()
        .transform(parser::parseClaimsJws)
        .getBody()
        .getSubject()
        .transform(userService::findByUsername)
        .switchIfEmpty(Mono.error(new RejectedSetupException("User Doesn't Exist")))
        .map(
            user ->
                new UsernamePasswordAuthenticationToken(
                    user.getUsername(), null, user.getAuthorities()));
  }
}
