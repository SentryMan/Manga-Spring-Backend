package com.mangasite.config.init;

import org.springframework.messaging.handler.MessagingAdviceBean;
import org.springframework.web.method.ControllerAdviceBean;

public class ControllerAdviceWrapper implements MessagingAdviceBean {
  private final ControllerAdviceBean delegate;

  public ControllerAdviceWrapper(ControllerAdviceBean delegate) {
    this.delegate = delegate;
  }

  @Override
  public int getOrder() {
    return delegate.getOrder();
  }

  @Override
  public Class<?> getBeanType() {
    return delegate.getBeanType();
  }

  @Override
  public Object resolveBean() {
    return delegate.resolveBean();
  }

  @Override
  public boolean isApplicableToBeanType(Class<?> beanType) {
    return delegate.isApplicableToBeanType(beanType);
  }
  // delegate all methods
}
