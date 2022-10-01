package com.mangasite.config.init;

import java.time.Duration;

import org.springframework.boot.autoconfigure.rsocket.RSocketMessageHandlerCustomizer;
import org.springframework.boot.rsocket.server.RSocketServerCustomizer;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.security.messaging.handler.invocation.reactive.AuthenticationPrincipalArgumentResolver;
import org.springframework.web.method.ControllerAdviceBean;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mangasite.rsocket.ConnectController;
import com.mangasite.rsocket.RSocketAdvice;
import com.mangasite.rsocket.RSocketChapterController;
import com.mangasite.rsocket.RSocketMangaController;
import com.mangasite.security.ServerSecurityConfig;

import io.avaje.inject.BeanScope;
import io.rsocket.core.Resume;
import reactor.util.retry.Retry;

public class AvajeSpringAdapter
    implements ApplicationContextInitializer<GenericApplicationContext> {

  private final BeanScope scope;

  public AvajeSpringAdapter(BeanScope scope) {
    this.scope = scope;
  }

  @Override
  public void initialize(GenericApplicationContext context) {

    context.registerBean(
        RSocketMangaController.class, () -> scope.get(RSocketMangaController.class));
    context.registerBean(
        RSocketChapterController.class, () -> scope.get(RSocketChapterController.class));
    final var m = new ObjectMapper();
    context.registerBean(ObjectMapper.class, () -> m);
    context.registerBean(ServerSecurityConfig.class, ServerSecurityConfig::new);
    context.registerBean(ConnectController.class, ConnectController::new);

    context.registerBean(
        RSocketServerCustomizer.class,
        () -> {
          final var resume =
              new Resume()
                  .cleanupStoreOnKeepAlive()
                  .retry(
                      Retry.fixedDelay(Long.MAX_VALUE, Duration.ofSeconds(1))
                          .doBeforeRetry(
                              s -> System.out.println("Disconnected. Trying to resume...")));

          return rsocketServer -> rsocketServer.resume(resume);
        });
    context.registerBean(
        RSocketMessageHandlerCustomizer.class,
        () ->
            handler -> {
              handler
                  .getArgumentResolverConfigurer()
                  .addCustomResolver(new AuthenticationPrincipalArgumentResolver());

              handler.registerMessagingAdvice(
                  new ControllerAdviceWrapper(
                      new ControllerAdviceBean(scope.get(RSocketAdvice.class))));
            });
  }
}
