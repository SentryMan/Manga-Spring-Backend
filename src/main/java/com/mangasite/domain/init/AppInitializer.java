package com.mangasite.domain.init;

import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;

import com.mangasite.filters.SPAWebFilter;
import com.mangasite.services.ConnectService;

public class AppInitializer implements ApplicationContextInitializer<GenericApplicationContext> {

  @Override
  public void initialize(GenericApplicationContext context) {
    context.registerBean(ConnectService.class, ConnectService::new);
    context.registerBean(SPAWebFilter.class, SPAWebFilter::new);
  }
}
