package com.mangasite.domain.lease;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.function.LongSupplier;
import com.netflix.concurrency.limits.Limit;
import io.netty.buffer.ByteBuf;
import io.rsocket.frame.FrameType;
import io.rsocket.plugins.RequestInterceptor;
import reactor.util.annotation.Nullable;

public class LimitBasedStatsCollector extends AtomicBoolean implements RequestInterceptor {

  final LeaseManager leaseManager;
  final Limit limitAlgorithm;

  final ConcurrentMap<Integer, Integer> inFlightMap = new ConcurrentHashMap<>();
  final ConcurrentMap<Integer, Long> timeMap = new ConcurrentHashMap<>();

  final LongSupplier clock = System::nanoTime;

  public LimitBasedStatsCollector(LeaseManager leaseManager, Limit limitAlgorithm) {
    this.leaseManager = leaseManager;
    this.limitAlgorithm = limitAlgorithm;
  }

  @Override
  public void onStart(int streamId, FrameType requestType, @Nullable ByteBuf metadata) {
    final var startTime = clock.getAsLong();

    final var currentInFlight = leaseManager.incrementInFlightAndGet();

    inFlightMap.put(streamId, currentInFlight);
    timeMap.put(streamId, startTime);
  }

  @Override
  public void onReject(
      Throwable rejectionReason, FrameType requestType, @Nullable ByteBuf metadata) {}

  @Override
  public void onTerminate(int streamId, FrameType requestType, @Nullable Throwable t) {
    leaseManager.decrementInFlight();

    final var startTime = timeMap.remove(streamId);
    final var currentInflight = inFlightMap.remove(streamId);

    limitAlgorithm.onSample(startTime, clock.getAsLong() - startTime, currentInflight, t != null);
  }

  @Override
  public void onCancel(int streamId, FrameType requestType) {
    leaseManager.decrementInFlight();

    final var startTime = timeMap.remove(streamId);
    final var currentInflight = inFlightMap.remove(streamId);

    limitAlgorithm.onSample(startTime, clock.getAsLong() - startTime, currentInflight, true);
  }

  @Override
  public boolean isDisposed() {
    return get();
  }

  @Override
  public void dispose() {
    if (!getAndSet(true)) {
      leaseManager.unregister();
    }
  }
}
