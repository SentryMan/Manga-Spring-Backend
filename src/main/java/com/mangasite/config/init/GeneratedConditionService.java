package com.mangasite.config.init;

import java.util.HashMap;
import java.util.Map;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.init.func.AnnotationMetadataConditionService;
import org.springframework.init.func.SimpleConditionService;
import org.springframework.init.func.TypeCondition;
import org.springframework.init.func.TypeConditionService;
import org.springframework.init.library.LibraryTypeConditionMapper;

public class GeneratedConditionService extends TypeConditionService {
  private static Map<String, Map<String, Boolean>> METHODS = new HashMap<>();

  private static Map<String, Boolean> TYPES = new HashMap<>();

  private static Map<String, TypeCondition> MAPPERS = new HashMap<>();

  static {
    TYPES.put(
        "org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.web.reactive.HttpHandlerAutoConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerAutoConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.servlet.SpringBootWebSecurityConfiguration",
        false);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.reactive.ReactiveSecurityAutoConfiguration$EnableWebFluxSecurityConfiguration",
        false);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerJwkConfiguration$JwtConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperBuilderConfiguration",
        true);
    TYPES.put("org.springframework.boot.autoconfigure.data.mongo.MongoDataConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration$JacksonCborStrategyConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerOpaqueTokenConfiguration$OpaqueTokenIntrospectionClientConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryConfiguration$EmbeddedNetty",
        true);
    TYPES.put("org.springframework.boot.autoconfigure.mongo.MongoReactiveAutoConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.mongo.MongoReactiveAutoConfiguration$NettyDriverConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.dao.PersistenceExceptionTranslationAutoConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration",
        true);
    TYPES.put("com.mangasite.MangaBackendApplication", true);
    TYPES.put("org.springframework.boot.autoconfigure.netty.NettyAutoConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.servlet.WebSecurityEnablerConfiguration",
        false);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerOpaqueTokenConfiguration$WebSecurityConfiguration",
        false);
    TYPES.put(
        "org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration",
        false);
    TYPES.put("org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration", true);
    TYPES.put("org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketServerAutoConfiguration$EmbeddedServerConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketServerAutoConfiguration$WebFluxServerConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration$JacksonCodecConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.web.servlet.HttpEncodingAutoConfiguration", false);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerConfiguration$JwtConfiguration",
        true);
    TYPES.put("org.springframework.boot.autoconfigure.context.LifecycleAutoConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerConfiguration$OpaqueTokenConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerJwkConfiguration$WebSecurityConfiguration",
        false);
    TYPES.put(
        "org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration$ResourceChainCustomizerConfiguration",
        false);
    TYPES.put("org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration$NettyWebServerFactoryCustomizerConfiguration",
        true);
    TYPES.put("org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration", false);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration",
        false);
    TYPES.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketMessagingAutoConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.rsocket.RSocketSecurityAutoConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.data.mongo.MongoReactiveRepositoriesAutoConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.mongo.MongoReactiveAutoConfiguration$MongoClientSettingsConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.security.reactive.ReactiveSecurityAutoConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration$JacksonJsonStrategyConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebFluxAutoConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$ParameterNamesModuleConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration$EnableWebFluxConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$Jackson2ObjectMapperBuilderCustomizerConfiguration",
        true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketServerAutoConfiguration", true);
    TYPES.put("org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration", true);
    TYPES.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketRequesterAutoConfiguration", true);
  }

  static {
    METHODS.put(
        "org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration")
        .put("org.springframework.data.mongodb.core.SimpleReactiveMongoDatabaseFactory", true);
    METHODS
        .get("org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration")
        .put("org.springframework.data.mongodb.core.convert.MappingMongoConverter", true);
    METHODS
        .get("org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration")
        .put("org.springframework.core.io.buffer.DefaultDataBufferFactory", true);
    METHODS
        .get("org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration")
        .put("org.springframework.data.mongodb.gridfs.ReactiveGridFsTemplate", true);
    METHODS
        .get("org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration")
        .put("org.springframework.data.mongodb.core.ReactiveMongoTemplate", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration$JacksonCborStrategyConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration$JacksonCborStrategyConfiguration")
        .put("org.springframework.boot.rsocket.messaging.RSocketStrategiesCustomizer", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration$JacksonJsonStrategyConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration$JacksonJsonStrategyConfiguration")
        .put("org.springframework.boot.rsocket.messaging.RSocketStrategiesCustomizer", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerOpaqueTokenConfiguration$OpaqueTokenIntrospectionClientConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerOpaqueTokenConfiguration$OpaqueTokenIntrospectionClientConfiguration")
        .put(
            "org.springframework.security.oauth2.server.resource.introspection.NimbusReactiveOpaqueTokenIntrospector",
            false);
    METHODS.put(
        "org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration$JacksonCodecConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration$JacksonCodecConfiguration")
        .put("org.springframework.boot.web.codec.CodecCustomizer", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryConfiguration$EmbeddedNetty",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryConfiguration$EmbeddedNetty")
        .put("org.springframework.http.client.reactive.ReactorResourceFactory", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.mongo.MongoReactiveAutoConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.mongo.MongoReactiveAutoConfiguration")
        .put("com.mongodb.reactivestreams.client.MongoClient", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.context.LifecycleAutoConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.context.LifecycleAutoConfiguration")
        .put("org.springframework.context.support.DefaultLifecycleProcessor", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration")
        .put("org.springframework.context.support.PropertySourcesPlaceholderConfigurer", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebFluxAutoConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebFluxAutoConfiguration")
        .put("org.springframework.boot.web.reactive.error.DefaultErrorAttributes", true);
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebFluxAutoConfiguration")
        .put("org.springframework.boot.web.reactive.error.ErrorWebExceptionHandler", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.dao.PersistenceExceptionTranslationAutoConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.dao.PersistenceExceptionTranslationAutoConfiguration")
        .put(
            "org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor",
            true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$ParameterNamesModuleConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$ParameterNamesModuleConfiguration")
        .put("com.fasterxml.jackson.module.paramnames.ParameterNamesModule", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration")
        .put(
            "org.springframework.boot.autoconfigure.web.reactive.TomcatReactiveWebServerFactoryCustomizer",
            false);
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration")
        .put("org.springframework.web.server.adapter.ForwardedHeaderTransformer", false);
    METHODS.put(
        "org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperConfiguration")
        .put("com.fasterxml.jackson.databind.ObjectMapper", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerJwkConfiguration$JwtConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerJwkConfiguration$JwtConfiguration")
        .put("org.springframework.security.oauth2.jwt.NimbusReactiveJwtDecoder", false);
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerJwkConfiguration$JwtConfiguration")
        .put("org.springframework.security.oauth2.jwt.ReactiveJwtDecoder", false);
    METHODS.put(
        "org.springframework.boot.autoconfigure.data.mongo.MongoDataConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.data.mongo.MongoDataConfiguration")
        .put("org.springframework.data.mongodb.core.mapping.MongoMappingContext", true);
    METHODS
        .get("org.springframework.boot.autoconfigure.data.mongo.MongoDataConfiguration")
        .put("org.springframework.data.mongodb.core.convert.MongoCustomConversions", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration$EnableWebFluxConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration$EnableWebFluxConfiguration")
        .put("org.springframework.web.server.i18n.LocaleContextResolver", true);
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration$EnableWebFluxConfiguration")
        .put("org.springframework.web.server.session.WebSessionManager", false);
    METHODS.put(
        "org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperBuilderConfiguration",
        new HashMap<>());
    METHODS
        .get(
            "org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration$JacksonObjectMapperBuilderConfiguration")
        .put("org.springframework.http.converter.json.Jackson2ObjectMapperBuilder", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration")
        .put(
            "org.springframework.security.authentication.DefaultAuthenticationEventPublisher",
            true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration")
        .put("org.springframework.boot.web.reactive.filter.OrderedHiddenHttpMethodFilter", false);
    METHODS.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketMessagingAutoConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.rsocket.RSocketMessagingAutoConfiguration")
        .put(
            "org.springframework.messaging.rsocket.annotation.support.RSocketMessageHandler", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration")
        .put("org.springframework.messaging.rsocket.RSocketStrategies", true);
    METHODS.put(
        "org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration")
        .put("org.springframework.boot.info.GitProperties", false);
    METHODS
        .get("org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration")
        .put("org.springframework.boot.info.BuildProperties", false);
    METHODS.put(
        "org.springframework.boot.autoconfigure.rsocket.RSocketRequesterAutoConfiguration",
        new HashMap<>());
    METHODS
        .get("org.springframework.boot.autoconfigure.rsocket.RSocketRequesterAutoConfiguration")
        .put("org.springframework.messaging.rsocket.RSocketRequester$Builder", true);
  }

  static {
    MAPPERS.putAll(new LibraryTypeConditionMapper().get());
  }

  public GeneratedConditionService(GenericApplicationContext context) {
    super(
        context,
        new SimpleConditionService(new AnnotationMetadataConditionService(context), TYPES, METHODS),
        MAPPERS);
  }
}
