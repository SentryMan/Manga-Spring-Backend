package com.mangasite.config;

import static com.mongodb.MongoClientSettings.getDefaultCodecRegistry;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

import org.bson.codecs.configuration.CodecProvider;
import org.bson.codecs.pojo.PojoCodecProvider;

import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mongodb.reactivestreams.client.MongoClient;
import com.mongodb.reactivestreams.client.MongoClients;
import com.mongodb.reactivestreams.client.MongoCollection;
import com.mongodb.reactivestreams.client.MongoDatabase;

import io.avaje.config.Config;
import io.avaje.inject.Bean;
import io.avaje.inject.Factory;
import io.avaje.inject.PreDestroy;
import jakarta.inject.Named;

@Factory
public class MongoConfig {

  private static final MongoClient mongoClient =
      MongoClients.create(Config.get("spring.data.mongodb.uri"));

  @PreDestroy
  void close() {
    mongoClient.close();
  }

  @Bean
  MongoDatabase db() {
    final CodecProvider pojoCodecProvider = PojoCodecProvider.builder().automatic(true).build();
    final var pojoCodecRegistry =
        fromRegistries(getDefaultCodecRegistry(), fromProviders(pojoCodecProvider));

    return mongoClient.getDatabase(Config.get("mongodb.db")).withCodecRegistry(pojoCodecRegistry);
  }

  @Bean
  @Named("manga")
  MongoCollection<Manga> manga(MongoDatabase db) {
    return db.getCollection("Manga", Manga.class);
  }

  @Bean
  @Named("chapter")
  MongoCollection<MangaChapters> chapter(MongoDatabase db) {
    return db.getCollection("Chapters", MangaChapters.class);
  }
}
