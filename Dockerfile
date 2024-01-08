FROM amazoncorretto:21-alpine-jdk as jreBuilder

RUN apk add binutils
RUN jlink \
    --add-modules \
    java.base,java.desktop,java.instrument,java.logging,java.management,java.naming,java.net.http,java.sql,java.xml,jdk.crypto.ec,jdk.naming.dns,jdk.unsupported,jdk.incubator.concurrent\
    --verbose \
    --strip-debug \
    --no-header-files \
    --no-man-pages \
    --output /jre

FROM alpine

COPY --from=jreBuilder /jre /usr/lib/jre
COPY ./target/manga-backend-*jar manga-backend.jar
ENTRYPOINT ["/usr/lib/jre/bin/java","--enable-preview", "-XX:MaxRAMPercentage=80.0","-jar", "./manga-backend.jar"]

