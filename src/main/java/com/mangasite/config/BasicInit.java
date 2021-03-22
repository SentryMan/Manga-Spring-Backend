package com.mangasite.config;

import java.util.Collection;
import java.util.Set;
import org.springframework.beans.factory.support.BeanNameGenerator;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.annotation.AnnotationBeanNameGenerator;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.type.classreading.CachingMetadataReaderFactory;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.init.func.FunctionalInstallerImportRegistrars;
import org.springframework.init.func.ImportRegistrars;
import org.springframework.init.func.InfrastructureProvider;

public class BasicInit implements InfrastructureProvider {

  @Override
  public Collection<? extends ApplicationContextInitializer<GenericApplicationContext>>
      getInitializers(GenericApplicationContext main) {
    return Set.of(
        ac ->
            ac.registerBean(
                MetadataReaderFactory.class,
                () -> new CachingMetadataReaderFactory(ac.getBeanFactory().getBeanClassLoader())),
        ac -> ac.registerBean(BeanNameGenerator.class, AnnotationBeanNameGenerator::new),
        ac -> ac.registerBean(ImportRegistrars.class, FunctionalInstallerImportRegistrars::new));
  }
}
