package com.mangasite.config.init;

import java.time.Duration;

import org.springframework.boot.autoconfigure.rsocket.RSocketMessageHandlerCustomizer;
import org.springframework.boot.rsocket.server.RSocketServerCustomizer;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.security.messaging.handler.invocation.reactive.AuthenticationPrincipalArgumentResolver;
import org.springframework.web.method.ControllerAdviceBean;

import io.rsocket.core.Resume;
import reactor.util.retry.Retry;

public record RSocketServerInitializer()
    implements ApplicationContextInitializer<GenericApplicationContext> {

  @Override
  public void initialize(GenericApplicationContext context) {
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
                      ControllerAdviceBean.findAnnotatedBeans(context).get(0)));
            });
  }
}
