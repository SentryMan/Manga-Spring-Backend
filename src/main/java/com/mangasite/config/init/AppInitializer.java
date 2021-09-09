package com.mangasite.config.init;

import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;

import com.mangasite.filters.SPAWebFilter;

public class AppInitializer implements ApplicationContextInitializer<GenericApplicationContext> {

  @Override
  public void initialize(GenericApplicationContext context) {
    context.registerBean(SPAWebFilter.class, SPAWebFilter::new);
    RSocketServerInitializer.initialize(context);
  }
}
