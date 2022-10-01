package com.mangasite.security;

import java.util.Arrays;

import io.avaje.config.Config;
import io.javalin.security.BasicAuthCredentials;
import io.javalin.security.RouteRole;

public enum AppRole implements RouteRole {
  ANYONE("", ""),
  ADMIN(Config.get("roles.admin.username"), Config.get("roles.admin.password")),
  USER(Config.get("roles.user.username"), Config.get("roles.user.password"));

  private final String username;
  private final String password;

  AppRole(String string, String string2) {
    username = string;
    password = string2;
  }

  public String getUsername() {
    return username;
  }

  public String getPassword() {
    return password;
  }

  public static AppRole getRole(BasicAuthCredentials auth) {

    final var user = auth.getUsername();
    final var pass = auth.getPassword();
    return Arrays.stream(AppRole.values())
        .filter(r -> r.username.equals(user))
        .filter(r -> r.password.equals(pass))
        .findAny()
        .orElse(ANYONE);
  }

  public static AppRole getRole(String auth) {

    return Arrays.stream(AppRole.values())
        .filter(r -> r.username.equals(auth))
        .findAny()
        .orElse(ANYONE);
  }
}
