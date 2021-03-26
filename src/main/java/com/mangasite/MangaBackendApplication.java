package com.mangasite;

import static org.springframework.fu.jafu.Jafu.reactiveWebApplication;
import static org.springframework.nativex.hint.AccessBits.PUBLIC_CONSTRUCTORS;
import static org.springframework.nativex.hint.AccessBits.PUBLIC_METHODS;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.aop.AopAutoConfiguration;
import org.springframework.boot.autoconfigure.availability.ApplicationAvailabilityAutoConfiguration;
import org.springframework.boot.autoconfigure.cache.CacheAutoConfiguration;
import org.springframework.boot.autoconfigure.context.MessageSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.reactive.ReactiveUserDetailsServiceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.boot.autoconfigure.task.TaskExecutionAutoConfiguration;
import org.springframework.boot.autoconfigure.task.TaskSchedulingAutoConfiguration;
import org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration;
import org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration;
import org.springframework.boot.autoconfigure.web.reactive.function.client.ClientHttpConnectorAutoConfiguration;
import org.springframework.boot.autoconfigure.web.reactive.function.client.WebClientAutoConfiguration;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.fu.jafu.JafuApplication;
import org.springframework.init.func.ImportRegistrars;
import org.springframework.init.func.InfrastructureUtils;
import org.springframework.nativex.hint.NativeHint;
import org.springframework.nativex.hint.TypeHint;
import com.mangasite.config.init.AppInitializer;
import com.mangasite.config.init.NettyInitializer;
import com.mangasite.domain.DeviceInfo;
import com.mangasite.domain.requests.ChapterChangeRequest;
import com.mangasite.domain.requests.MangaChangeRequest;
import com.mangasite.domain.requests.PageChangeRequest;
import com.mangasite.domain.requests.ServerMessage;
import com.mongodb.client.model.changestream.ChangeStreamDocument;

// set native image reflective access
@NativeHint(
    types =
        @TypeHint(
            access = PUBLIC_CONSTRUCTORS | PUBLIC_METHODS,
            types = {
              MangaChangeRequest.class,
              ChapterChangeRequest.class,
              PageChangeRequest.class,
              ServerMessage.class,
              DeviceInfo.class,
              ChangeStreamDocument.class,
            }))
@SpringBootApplication(
    exclude = {
      AopAutoConfiguration.class,
      CacheAutoConfiguration.class,
      WebClientAutoConfiguration.class,
      RestTemplateAutoConfiguration.class,
      MessageSourceAutoConfiguration.class,
      TaskExecutionAutoConfiguration.class,
      TaskSchedulingAutoConfiguration.class,
      UserDetailsServiceAutoConfiguration.class,
      ClientHttpConnectorAutoConfiguration.class,
      ApplicationAvailabilityAutoConfiguration.class,
      ReactiveWebServerFactoryAutoConfiguration.class,
      ReactiveUserDetailsServiceAutoConfiguration.class,
    })
public class MangaBackendApplication {

  public static void main(String[] args) {

    final ApplicationContextInitializer<GenericApplicationContext> delayedRegisterInit =
        context ->
            InfrastructureUtils.getBean(context.getBeanFactory(), ImportRegistrars.class)
                .processDeferred(context);

    var app =
        reactiveWebApplication(
            dsl ->
                dsl.enable(new AppInitializer())
                    .enable(new NettyInitializer())
                    .enable(delayedRegisterInit));

    app.run(args);
  }
}
