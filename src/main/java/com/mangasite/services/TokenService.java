package com.mangasite.services;

import static com.mangasite.security.AppRole.ANYONE;

import java.security.Principal;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.Map;
import java.util.Set;
import java.util.function.Predicate;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.mangasite.security.AppRole;

import io.avaje.config.Config;
import io.rsocket.exceptions.RejectedSetupException;
import reactor.core.publisher.Mono;

public class TokenService {
  private TokenService() {}

  private static final long VALIDITY = Config.getLong("jwt.validity", 1800);
  private static final String issuer = Config.get("jwt.issuer", "memes");
  private static final Algorithm algorithm =
      Config.get("jwt.secret.key", "secretkey").transform(Algorithm::HMAC256);

  private static final JWTVerifier verifier =
      JWT.require(algorithm)
          .withIssuer(issuer)
          .withClaim(
              "role",
              (c, d) -> {
                final var decodedPayload = new String(Base64.getDecoder().decode(d.getPayload()));
                for (final var r : AppRole.values()) {
                  if (decodedPayload.contains(r.getPassword())
                      && decodedPayload.contains(r.getUsername())) {
                    return true;
                  }
                }
                return false;
              })
          .build();

  public static Mono<ServerResponse> getToken(ServerRequest request) {

    return request
        .principal()
        .map(Principal::getName)
        .map(AppRole::getByUserName)
        .map(
            role ->
                JWT.create()
                    .withIssuedAt(Instant.now())
                    .withExpiresAt(Instant.now().plus(VALIDITY, ChronoUnit.SECONDS))
                    .withClaim("role", role.name())
                    .withIssuer(issuer)
                    .withPayload(Map.of(role.getUsername(), role.getPassword()))
                    .sign(algorithm))
        .flatMap(ServerResponse.ok()::bodyValue);
  }

  public static Mono<Authentication> authenticateToken(Authentication authentication) {

    return authentication
        .getCredentials()
        .toString()
        .transform(verifier::verify)
        .getClaim("role")
        .asString()
        .transform(Mono::just)
        .map(AppRole::getByRole)
        .filter(Predicate.not(ANYONE::equals))
        .switchIfEmpty(Mono.error(new RejectedSetupException("User Doesn't Exist")))
        .map(
            user ->
                new UsernamePasswordAuthenticationToken(
                    user.getUsername(), null, Set.of(new SimpleGrantedAuthority(user.name()))));
  }
}
