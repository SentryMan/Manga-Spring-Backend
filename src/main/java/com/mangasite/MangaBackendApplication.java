package com.mangasite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.rsocket.RSocketSecurityAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@EnableReactiveMongoRepositories
@SpringBootApplication(exclude = {RSocketSecurityAutoConfiguration.class})
public class MangaBackendApplication {

  public static void main(String[] args) {
    SpringApplication.run(MangaBackendApplication.class, args);
  }
}
