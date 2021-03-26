package com.mangasite.domain.requests;

public class ServerMessage {

  final String message;

  public ServerMessage(String message) {
    this.message = message;
  }

  public String getMessage() {
    return message;
  }
}
