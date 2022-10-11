package com.mangasite.domain;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.messaging.rsocket.RSocketRequester;

import reactor.core.scheduler.Scheduler;
import reactor.core.scheduler.Schedulers;

public class Constants {
  private Constants() {}

  public static final String ADMIN = "ADMIN";
  public static final String USER = "USER";

  public static final AtomicInteger ACTIVE_CONNECTIONS = new AtomicInteger();

  public static final Map<String, RSocketRequester> CLIENT_REQUESTER_MAP = new HashMap<>();

  public static final Map<String, String> CLIENT_MANGA_MAP = new HashMap<>();

  //  public static final Scheduler VIRTUAL_SCHEDULER =
  //	      Schedulers.fromExecutor(Executors.newVirtualThreadPerTaskExecutor());
  public static final Scheduler VIRTUAL_SCHEDULER = Schedulers.boundedElastic();
}
