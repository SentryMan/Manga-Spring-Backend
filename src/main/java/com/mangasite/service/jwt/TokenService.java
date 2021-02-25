package com.mangasite.service.jwt;

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
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.rsocket.exceptions.RejectedSetupException;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class TokenService {

  @Value("${jwt.validity:1800}")
  private int jwtTokenValidity;

  @Value("${jwt.secret.key:secretkey}")
  private String key;

  private final MapReactiveUserDetailsService userService;

  public Mono<Authentication> authenticateToken(Authentication authentication) {
    final var jwt = authentication.getCredentials().toString();
    final var parser = Jwts.parser().setSigningKey(key);

    return Mono.fromSupplier(parser.parseClaimsJws(jwt)::getBody)
        .map(Claims::getSubject)
        .flatMap(subject -> userService.findByUsername(subject))
        .switchIfEmpty(Mono.error(new RejectedSetupException("User Doesn't Exist")))
        .map(
            user ->
                new UsernamePasswordAuthenticationToken(
                    user.getUsername(), null, user.getAuthorities()));
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
}
