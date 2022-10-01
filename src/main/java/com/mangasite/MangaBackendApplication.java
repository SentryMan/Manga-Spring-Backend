package com.mangasite;

import static org.springframework.nativex.hint.TypeAccess.PUBLIC_CONSTRUCTORS;
import static org.springframework.nativex.hint.TypeAccess.PUBLIC_METHODS;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.autoconfigure.rsocket.RSocketMessagingAutoConfiguration;
import org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration;
import org.springframework.boot.autoconfigure.security.rsocket.RSocketSecurityAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.nativex.hint.NativeHint;
import org.springframework.nativex.hint.TypeHint;

import com.mangasite.config.init.AvajeSpringAdapter;
import com.mangasite.record.DeviceInfo;
import com.mangasite.record.ServerMessage;
import com.mongodb.client.model.changestream.ChangeStreamDocument;

import io.avaje.config.Config;
import io.avaje.inject.BeanScope;
import io.javalin.Javalin;

// set native image reflective access
@NativeHint(
    types =
        @TypeHint(
            access = {PUBLIC_CONSTRUCTORS, PUBLIC_METHODS},
            types = {
              ChangeStreamDocument.class,
              ServerMessage.class,
              DeviceInfo.class,
            }))
@ImportAutoConfiguration({
  RSocketMessagingAutoConfiguration.class,
  RSocketSecurityAutoConfiguration.class,
  RSocketStrategiesAutoConfiguration.class
})
@SpringBootConfiguration
public class MangaBackendApplication {

  public static void main(String[] args) {
    try {
      final var scope = BeanScope.builder().build();
      scope.get(Javalin.class).start(Config.getInt("server.port", 8080));

      new SpringApplicationBuilder(MangaBackendApplication.class)
          .web(WebApplicationType.NONE)
          .initializers(new AvajeSpringAdapter(scope))
          .build(args)
          .run(args);
    } catch (final Exception e) {
      e.printStackTrace();
    }
  }
}
