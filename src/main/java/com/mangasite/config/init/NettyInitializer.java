package com.mangasite.config.init;

import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration;
import org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryConfiguration_EmbeddedNettyInitializer;
import org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryCustomizer;
import org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.init.func.InfrastructureUtils;

public class NettyInitializer implements ApplicationContextInitializer<GenericApplicationContext> {

  @Override
  public void initialize(GenericApplicationContext context) {

    context.registerBean(
        ReactiveWebServerFactoryAutoConfiguration.class,
        ReactiveWebServerFactoryAutoConfiguration::new);

    context.registerBean(
        "reactiveWebServerFactoryCustomizer",
        ReactiveWebServerFactoryCustomizer.class,
        () ->
            context
                .getBean(ReactiveWebServerFactoryAutoConfiguration.class)
                .reactiveWebServerFactoryCustomizer(context.getBean(ServerProperties.class)));
    ConfigurationPropertiesBindingPostProcessor.register(context);
    if (context.getBeanFactory().getBeanNamesForType(ServerProperties.class).length == 0)
      context.registerBean(ServerProperties.class, ServerProperties::new);
    InfrastructureUtils.invokeAwareMethods(
            new ReactiveWebServerFactoryAutoConfiguration.BeanPostProcessorsRegistrar(),
            context.getEnvironment(),
            context,
            context)
        .registerBeanDefinitions(null, context);
    new ReactiveWebServerFactoryConfiguration_EmbeddedNettyInitializer().initialize(context);
  }
}
