package com.mangasite.config.init;

import org.springframework.messaging.handler.MessagingAdviceBean;

import com.mangasite.rsocket.RSocketAdvice;

public class ControllerAdviceWrapper implements MessagingAdviceBean {
  private final RSocketAdvice delegate;

  public ControllerAdviceWrapper(RSocketAdvice rSocketAdvice) {
    this.delegate = rSocketAdvice;
  }

  @Override
  public int getOrder() {
    return 1;
  }

  @Override
  public Class<?> getBeanType() {
    return delegate.getClass();
  }

  @Override
  public Object resolveBean() {
    return delegate;
  }

  @Override
  public boolean isApplicableToBeanType(Class<?> beanType) {
    return beanType.isAssignableFrom(delegate.getClass());
  }
  // delegate all methods
}
