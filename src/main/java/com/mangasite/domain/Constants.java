package com.mangasite.domain;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.data.mongodb.core.ChangeStreamOptions;
import org.springframework.messaging.rsocket.RSocketRequester;

public interface Constants {

  String ADMIN = "ADMIN";
  String USER = "USER";
  ChangeStreamOptions FULL_DOC = ChangeStreamOptions.builder().returnFullDocumentOnUpdate().build();

  AtomicInteger ACTIVE_CONNECTIONS = new AtomicInteger();
  Map<String, RSocketRequester> CLIENT_REQUESTER_MAP = new HashMap<>();
  Map<String, String> CLIENT_MANGA_MAP = new HashMap<>();
}
