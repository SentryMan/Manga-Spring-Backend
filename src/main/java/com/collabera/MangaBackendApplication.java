package com.collabera;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableReactiveMongoRepositories
@SpringBootApplication
@EnableScheduling
public class MangaBackendApplication {

  public static void main(String[] args) {
    SpringApplication.run(MangaBackendApplication.class, args);
  }
}
