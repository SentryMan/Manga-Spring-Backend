package com.mangasite.domain.lease;

import java.time.Duration;
import com.netflix.concurrency.limits.Limit;
import io.rsocket.lease.Lease;
import io.rsocket.lease.TrackingLeaseSender;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;
import reactor.util.concurrent.Queues;

public class LimitBasedLeaseSender extends LimitBasedStatsCollector implements TrackingLeaseSender {

  final String connectionId;
  final Sinks.Many<Lease> sink =
      Sinks.many().unicast().onBackpressureBuffer(Queues.<Lease>one().get());

  public LimitBasedLeaseSender(
      String connectionId, LeaseManager leaseManager, Limit limitAlgorithm) {
    super(leaseManager, limitAlgorithm);
    this.connectionId = connectionId;
  }

  @Override
  public Flux<Lease> send() {
    leaseManager.register(this);

    return sink.asFlux();
  }

  public void sendLease(int ttl, int amount) {
    final var nextLease = Lease.create(Duration.ofMillis(ttl), amount);
    var result = sink.tryEmitNext(nextLease);

    if (result.isFailure()) {
      System.out.println(
          "Connection["
              + connectionId
              + "]. Issued Lease: ["
              + nextLease
              + "] was not sent due to "
              + result);
    }
  }
}
