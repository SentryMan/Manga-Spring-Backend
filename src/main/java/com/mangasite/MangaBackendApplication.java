package com.mangasite;

import static org.springframework.fu.jafu.Jafu.reactiveWebApplication;
import static org.springframework.fu.jafu.webflux.WebFluxServerDsl.webFlux;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;
import org.springframework.fu.jafu.JafuApplication;

@EnableReactiveMongoRepositories
@SpringBootApplication
public class MangaBackendApplication {

  public static void main(String[] args) {

    JafuApplication app = reactiveWebApplication(dsl -> dsl.enable(webFlux()));

    app.run(args);
  }
}
