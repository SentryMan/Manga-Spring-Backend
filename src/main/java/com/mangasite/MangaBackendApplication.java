package com.mangasite;

import static org.springframework.fu.jafu.Jafu.reactiveWebApplication;
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
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;
import org.springframework.fu.jafu.JafuApplication;
import org.springframework.init.func.ImportRegistrars;
import org.springframework.init.func.InfrastructureUtils;
import com.mangasite.config.init.AppInitializer;
import com.mangasite.config.init.NettyInitializer;

@EnableReactiveMongoRepositories
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

    JafuApplication app =
        reactiveWebApplication(
            dsl ->
                dsl.enable(new AppInitializer())
                    .enable(new NettyInitializer())
                    .enable(delayedRegisterInit));

    app.run(args);
  }
}
