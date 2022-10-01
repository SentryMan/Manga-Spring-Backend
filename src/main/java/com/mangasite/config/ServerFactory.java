package com.mangasite.config;

import java.util.List;
import java.util.Set;

import com.mangasite.security.AppRole;

import io.avaje.http.api.WebRoutes;
import io.avaje.inject.Bean;
import io.avaje.inject.Factory;
import io.javalin.Javalin;

@Factory
public class ServerFactory {

  @Bean
  Javalin server(List<WebRoutes> routes) {

    final var app = Javalin.create();
    final var cors =
        Set.of(
            "*manga-spring.com/",
            "http://localhost:4200",
            "https://manga-spring.firebaseapp.com",
            "https://manga-spring.web.app");

    app.options(
        "/*",
        ctx -> {
          final var origin = ctx.header("Origin");

          if (cors.contains(origin)
              || origin.startsWith("https://manga-spring--") && origin.endsWith(".web.app")) {

            ctx.header("Access-Control-Allow-Methods", "GET")
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Headers", "authorization");
          } else ctx.status(401);
        },
        AppRole.ANYONE);

    app.routes(() -> routes.forEach(WebRoutes::registerRoutes));

    app._conf.accessManager(
        (handler, ctx, routeRoles) -> {
          if (ctx.basicAuthCredentialsExist()
              && routeRoles.contains(AppRole.getRole(ctx.basicAuthCredentials()))) {
            handler.handle(ctx);
          } else {
            ctx.status(401);
          }
        });

    return app;
  }
}
