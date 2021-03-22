package com.mangasite.config.init;

import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.init.func.ImportRegistrars;
import org.springframework.init.func.InfrastructureUtils;

public class RegistrarDeferredInitializer
    implements ApplicationContextInitializer<GenericApplicationContext> {

  @Override
  public void initialize(GenericApplicationContext context) {

    InfrastructureUtils.getBean(context.getBeanFactory(), ImportRegistrars.class)
        .processDeferred(context);
  }
}
