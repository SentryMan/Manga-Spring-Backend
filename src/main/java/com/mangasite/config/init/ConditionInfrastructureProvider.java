package com.mangasite.config.init;

import java.util.Collection;
import java.util.List;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.init.func.ConditionService;
import org.springframework.init.func.InfrastructureProvider;

public class ConditionInfrastructureProvider implements InfrastructureProvider {
  @Override
  public Collection<? extends ApplicationContextInitializer<GenericApplicationContext>>
      getInitializers(GenericApplicationContext main) {
    ApplicationContextInitializer<GenericApplicationContext> conditions =
        context ->
            context.registerBean(ConditionService.class, () -> new GeneratedConditionService(main));
    return List.of(conditions);
  }
}
