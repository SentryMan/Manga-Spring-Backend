package com.mangasite.config;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import org.eclipse.jetty.util.thread.ThreadPool;

public final class LoomThreadPool implements ThreadPool {
  ExecutorService executorService = Executors.newVirtualThreadPerTaskExecutor();

  @Override
  public void join() throws InterruptedException {
    executorService.awaitTermination(Long.MAX_VALUE, TimeUnit.NANOSECONDS);
  }

  @Override
  public int getThreads() {
    return 1;
  }

  @Override
  public int getIdleThreads() {
    return 1;
  }

  // Nice
  @Override
  public boolean isLowOnThreads() {
    return false;
  }

  @Override
  public void execute(Runnable command) {
    executorService.submit(command);
  }
}
