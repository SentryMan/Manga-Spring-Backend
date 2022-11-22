package com.mangasite.security;

import java.util.Arrays;

import io.avaje.config.Config;

public enum AppRole {
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

  public static AppRole getByUserName(String auth) {

    return Arrays.stream(AppRole.values())
        .filter(r -> r.username.equals(auth))
        .findAny()
        .orElse(ANYONE);
  }

  public static AppRole getByRole(String role) {

    return Arrays.stream(AppRole.values())
        .filter(r -> r.name().equals(role))
        .findAny()
        .orElse(ANYONE);
  }
}
