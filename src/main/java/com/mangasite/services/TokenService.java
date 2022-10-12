package com.mangasite.services;

import static com.mangasite.security.AppRole.ANYONE;
import static io.jsonwebtoken.SignatureAlgorithm.HS256;

import java.security.Principal;
import java.util.Date;
import java.util.HashMap;
import java.util.Set;
import java.util.function.Predicate;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.mangasite.security.AppRole;

import io.avaje.config.Config;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.rsocket.exceptions.RejectedSetupException;
import reactor.core.publisher.Mono;

public class TokenService {
  private TokenService() {}

  private static final int VALIDITY = Config.getInt("jwt.validity", 1800);

  private static final String KEY = Config.get("jwt.secret.key", "secretkey");

  private static final JwtParser parser = KEY.transform(Jwts.parser()::setSigningKey);

  public static Mono<ServerResponse> getToken(ServerRequest request) {
    return request
        .principal()
        .map(Principal::getName)
        .map(AppRole::getRole)
        .map(
            role ->
                Jwts.builder()
                    .setClaims(HashMap.newHashMap(1))
                    .setSubject(role.getUsername())
                    .setIssuedAt(new Date(System.currentTimeMillis()))
                    .setExpiration(new Date(System.currentTimeMillis() + VALIDITY * 100))
                    .signWith(HS256, KEY)
                    .compact())
        .flatMap(ServerResponse.ok()::bodyValue);
  }

  public static Mono<Authentication> authenticateToken(Authentication authentication) {

    return authentication
        .getCredentials()
        .toString()
        .transform(parser::parseClaimsJws)
        .getBody()
        .getSubject()
        .transform(Mono::just)
        .map(AppRole::getRole)
        .filter(Predicate.not(ANYONE::equals))
        .switchIfEmpty(Mono.error(new RejectedSetupException("User Doesn't Exist")))
        .map(
            user ->
                new UsernamePasswordAuthenticationToken(
                    user.getUsername(), null, Set.of(new SimpleGrantedAuthority(user.name()))));
  }
}
