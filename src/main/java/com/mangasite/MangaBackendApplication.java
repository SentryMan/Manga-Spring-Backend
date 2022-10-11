package com.mangasite;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

import com.mangasite.config.init.AvajeSpringAdapter;

// @ImportAutoConfiguration({
//  RSocketMessagingAutoConfiguration.class,
//  RSocketSecurityAutoConfiguration.class,
//  RSocketStrategiesAutoConfiguration.class,
//  RSocketServerAutoConfiguration.class,
// })
@SpringBootApplication
public class MangaBackendApplication {

  public static void main(String[] args) {
    try {

      new SpringApplicationBuilder(MangaBackendApplication.class)
          .initializers(new AvajeSpringAdapter())
          .build()
          .run(args);
    } catch (final Exception e) {
      e.printStackTrace();
    }
  }
}
