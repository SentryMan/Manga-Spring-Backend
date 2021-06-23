package com.mangasite.domain;

import org.springframework.boot.autoconfigure.rsocket.RSocketMessageHandlerCustomizer;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.web.method.ControllerAdviceBean;

public class RsocketAdviceInititializer
    implements ApplicationContextInitializer<GenericApplicationContext> {

  @Override
  public void initialize(GenericApplicationContext context) {

    context.registerBean(
        RSocketMessageHandlerCustomizer.class,
        () ->
            handler -> {
              handler.registerMessagingAdvice(
                  new ControllerAdviceWrapper(
                      ControllerAdviceBean.findAnnotatedBeans(context).get(0)));
            });
  }
}
