package com.mangasite.config;

import static com.mangasite.security.AppRole.ANYONE;
import static com.mangasite.security.AppRole.getRole;

import java.util.List;

import io.avaje.http.api.WebRoutes;
import io.avaje.inject.Bean;
import io.avaje.inject.Factory;
import io.javalin.Javalin;

@Factory
public class ServerFactory {

  @Bean
  Javalin server(List<WebRoutes> routes) {

    final var app =
        Javalin.create(
            config -> {
              config.accessManager(
                  (handler, ctx, routeRoles) -> {
                    if (routeRoles.contains(ANYONE)
                        || (routeRoles.contains(getRole(ctx.basicAuthCredentials()))))
                      handler.handle(ctx);
                    else ctx.status(401);
                  });
              config.plugins.enableCors(
                  cors ->
                      cors.add(
                          it -> {
                            it.allowHost(
                                "https://manga-spring.com/",
                                "http://manga-spring.com/",
                                "http://localhost:4200",
                                "https://manga-spring.firebaseapp.com",
                                "https://manga-spring.web.app");
                            it.allowCredentials = true;
                          }));
            });

    app.routes(() -> routes.forEach(WebRoutes::registerRoutes));

    return app;
  }
}
