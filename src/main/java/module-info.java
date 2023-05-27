module manga.spring {
  requires io.avaje.inject;
  requires io.avaje.config;
  requires org.slf4j;
  requires spring.boot;
  requires spring.boot.autoconfigure;
  requires org.mongodb.driver.core;
  requires spring.web;
  requires org.mongodb.bson;
  requires spring.security.core;
  requires spring.security.config;
  requires spring.security.web;
  requires spring.security.rsocket;
  requires spring.security.messaging;
  requires spring.messaging;
  requires org.mongodb.driver.reactivestreams;
  requires spring.security.crypto;
  requires spring.webflux;
  requires com.fasterxml.jackson.annotation;
  requires com.fasterxml.jackson.databind;
  requires reactor.core;
  requires reactor.extra;
  requires spring.context;
  requires spring.beans;
  requires rsocket.core;
  requires com.auth0.jwt;
  requires org.reactivestreams;

  provides io.avaje.inject.spi.Module with
      com.mangasite.MangasiteModule;
}
