package com.mangasite.domain.init;

import org.springframework.boot.autoconfigure.rsocket.RSocketMessageHandlerCustomizer;
import org.springframework.boot.rsocket.server.RSocketServerCustomizer;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.security.messaging.handler.invocation.reactive.AuthenticationPrincipalArgumentResolver;
import org.springframework.web.method.ControllerAdviceBean;

import com.mangasite.config.ServerConfig;

public class RSocketServerInitializer
    implements ApplicationContextInitializer<GenericApplicationContext> {

  @Override
  public void initialize(GenericApplicationContext context) {
    context.registerBean(RSocketServerCustomizer.class, ServerConfig::serverCustomizer);
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
