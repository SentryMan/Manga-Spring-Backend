package com.mangasite.domain.lease;

import java.util.concurrent.BlockingDeque;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import reactor.core.scheduler.Scheduler;
import reactor.core.scheduler.Schedulers;

public class LeaseManager implements Runnable {

  volatile int activeConnectionsCount;
  static final AtomicIntegerFieldUpdater<LeaseManager> ACTIVE_CONNECTIONS_COUNT =
      AtomicIntegerFieldUpdater.newUpdater(LeaseManager.class, "activeConnectionsCount");

  volatile int stateAndInFlight;
  static final AtomicIntegerFieldUpdater<LeaseManager> STATE_AND_IN_FLIGHT =
      AtomicIntegerFieldUpdater.newUpdater(LeaseManager.class, "stateAndInFlight");

  static final int MASK_PAUSED = 0b1_000_0000_0000_0000_0000_0000_0000_0000;
  static final int MASK_IN_FLIGHT = 0b0_111_1111_1111_1111_1111_1111_1111_1111;

  final BlockingDeque<LimitBasedLeaseSender> sendersQueue = new LinkedBlockingDeque<>();
  final Scheduler worker = Schedulers.newSingle("RSocket Lease Manager");

  final int capacity;
  final int ttl;

  public LeaseManager(int capacity, int ttl) {
    this.capacity = capacity;
    this.ttl = ttl;
  }

  @Override
  public void run() {
    try {
      final var leaseSender = sendersQueue.poll();

      if (leaseSender == null) {
        return;
      }

      if (leaseSender.isDisposed()) {
        worker.schedule(this);
        return;
      }

      final var limit = leaseSender.limitAlgorithm.getLimit();

      if (limit == 0) {
        throw new IllegalStateException("Limit is 0");
      }

      if (pauseIfNoCapacity()) {
        sendersQueue.addFirst(leaseSender);
        System.out.println("Pause execution. Not enough capacity");
        return;
      }

      leaseSender.sendLease(ttl, limit);
      sendersQueue.offer(leaseSender);

      final var activeConnections = activeConnectionsCount;
      final var nextDelay = activeConnections == 0 ? ttl : ttl / activeConnections;

      worker.schedule(this, nextDelay, TimeUnit.MILLISECONDS);
    } catch (final Throwable e) {
      System.err.println("LeaseSender failed to send lease" + e);
    }
  }

  int incrementInFlightAndGet() {
    for (; ; ) {
      final var state = stateAndInFlight;
      final var paused = state & MASK_PAUSED;
      final var inFlight = stateAndInFlight & MASK_IN_FLIGHT;

      // assume overflow is impossible due to max concurrency in RSocket it self
      final var nextInFlight = inFlight + 1;

      if (STATE_AND_IN_FLIGHT.compareAndSet(this, state, nextInFlight | paused)) {
        return nextInFlight;
      }
    }
  }

  void decrementInFlight() {
    for (; ; ) {
      final var state = stateAndInFlight;
      final var paused = state & MASK_PAUSED;
      final var inFlight = stateAndInFlight & MASK_IN_FLIGHT;

      // assume overflow is impossible due to max concurrency in RSocket it self
      final var nextInFlight = inFlight - 1;

      if (inFlight == capacity && paused == MASK_PAUSED) {
        if (STATE_AND_IN_FLIGHT.compareAndSet(this, state, nextInFlight)) {
          System.out.println("Resume execution");
          worker.schedule(this);
          return;
        }
      } else if (STATE_AND_IN_FLIGHT.compareAndSet(this, state, nextInFlight | paused)) {
        return;
      }
    }
  }

  boolean pauseIfNoCapacity() {
    final var capacity = this.capacity;
    for (; ; ) {
      final var inFlight = stateAndInFlight;

      if (inFlight < capacity) {
        return false;
      }

      if (STATE_AND_IN_FLIGHT.compareAndSet(this, inFlight, inFlight | MASK_PAUSED)) {
        return true;
      }
    }
  }

  void unregister() {
    ACTIVE_CONNECTIONS_COUNT.decrementAndGet(this);
  }

  void register(LimitBasedLeaseSender sender) {
    sendersQueue.offer(sender);
    final var activeCount = ACTIVE_CONNECTIONS_COUNT.getAndIncrement(this);

    if (activeCount == 0) {
      worker.schedule(this);
    }
  }
}
