package com.mangasite;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration;
import org.springframework.boot.autoconfigure.rsocket.RSocketMessagingAutoConfiguration;
import org.springframework.boot.autoconfigure.rsocket.RSocketServerAutoConfiguration;
import org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration;
import org.springframework.boot.autoconfigure.security.reactive.ReactiveSecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.security.rsocket.RSocketSecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.web.reactive.HttpHandlerAutoConfiguration;
import org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration;
import org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration;
import org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebFluxAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;

import com.mangasite.config.init.AvajeSpringAdapter;

@ImportAutoConfiguration({
  ErrorWebFluxAutoConfiguration.class,
  HttpHandlerAutoConfiguration.class,
  PropertyPlaceholderAutoConfiguration.class,
  RSocketMessagingAutoConfiguration.class,
  RSocketSecurityAutoConfiguration.class,
  RSocketServerAutoConfiguration.class,
  RSocketStrategiesAutoConfiguration.class,
  ReactiveSecurityAutoConfiguration.class,
  ReactiveWebServerFactoryAutoConfiguration.class,
  SecurityAutoConfiguration.class,
  WebFluxAutoConfiguration.class,
})
@SpringBootConfiguration
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
