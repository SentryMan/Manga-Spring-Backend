package com.mangasite.config.init;

import java.util.Map;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.init.func.AnnotationMetadataConditionService;
import org.springframework.init.func.InfrastructureUtils;
import org.springframework.init.func.SimpleConditionService;
import org.springframework.init.func.TypeConditionService;

public class AppInitializer implements ApplicationContextInitializer<GenericApplicationContext> {

  @SuppressWarnings("unchecked")
  @Override
  public void initialize(GenericApplicationContext context) {

    // fix RSocket Condition
    final var fallBackConditionService =
        new SimpleConditionService(
            new AnnotationMetadataConditionService(context),
            Map.of(
                "org.springframework.boot.autoconfigure.rsocket.RSocketServerAutoConfiguration$EmbeddedServerAutoConfiguration",
                true,
                "org.springframework.boot.autoconfigure.rsocket.RSocketServerAutoConfiguration$WebFluxServerAutoConfiguration",
                true),
            Map.of());

    InfrastructureUtils.getBean(context.getBeanFactory(), TypeConditionService.class)
        .setFallback(fallBackConditionService);

    // run the Main Initializer generated by init plugin
    InfrastructureUtils.getBean(context.getBeanFactory(), ApplicationContextInitializer.class)
        .initialize(context);
  }
}
