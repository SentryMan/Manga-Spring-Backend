package com.mangasite.config.init;

import java.time.Duration;
import java.util.function.Supplier;

import org.springframework.boot.autoconfigure.rsocket.RSocketMessageHandlerCustomizer;
import org.springframework.boot.rsocket.server.RSocketServerCustomizer;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.messaging.handler.invocation.reactive.AuthenticationPrincipalArgumentResolver;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.method.ControllerAdviceBean;
import org.springframework.web.reactive.function.server.RouterFunction;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mangasite.controllers.TokenController$DI;
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

  private static final BeanScope scope = BeanScope.builder().shutdownHook(true).build();

  @Override
  public void initialize(GenericApplicationContext context) {

    context.registerBean(
        RSocketMangaController.class,
        () -> scope.get(RSocketMangaController.class),
        b -> b.setPrimary(true));
    context.registerBean(
        RSocketChapterController.class,
        () -> scope.get(RSocketChapterController.class),
        b -> b.setPrimary(true));
    final Supplier<ObjectMapper> mapper = ObjectMapper::new;
    context.registerBean(ObjectMapper.class, mapper);
    context.registerBean(ServerSecurityConfig.class, ServerSecurityConfig::new);
    context.registerBean(ConnectController.class, ConnectController::new, b -> b.setPrimary(true));
    context.registerBean(RSocketAdvice.class, () -> scope.get(RSocketAdvice.class));
    context.registerBean(
        MapReactiveUserDetailsService.class, () -> scope.get(MapReactiveUserDetailsService.class));
    context.registerBean(
        CorsConfigurationSource.class, () -> scope.get(CorsConfigurationSource.class));

    context.registerBean(
        RouterFunction.class,
        () -> scope.get(TokenController$DI.TYPE_RouterFunctionServerResponse, null));

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
                  new ControllerAdviceWrapper(context.getBean(ControllerAdviceBean.class)));
            });
  }
}
