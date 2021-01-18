package com.collabera.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import com.mongodb.reactivestreams.client.MongoClient;
import com.mongodb.reactivestreams.client.MongoClients;

@Configuration
public class MongoConfig {

  @Value("${spring.data.mongodb.uri}")
  String uri;

  @Bean
  public MongoClient mongoClient() {
    return MongoClients.create(uri);
  }

  @Bean
  public ReactiveMongoTemplate reactiveMongoTemplate(MongoClient client) {
    return new ReactiveMongoTemplate(client, "MangaDB");
  }
}
