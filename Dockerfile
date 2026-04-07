FROM amazoncorretto:26-alpine-jdk as jreBuilder

RUN apk add binutils
RUN jlink \
    --add-modules \
    java.base,java.desktop,java.instrument,java.logging,java.management,java.naming,java.net.http,java.sql,java.xml,jdk.naming.dns,jdk.unsupported\
    --verbose \
    --strip-debug \
    --no-header-files \
    --no-man-pages \
    --output /jre

FROM alpine

COPY --from=jreBuilder /jre /usr/lib/jre
COPY ./target/manga-backend-*jar manga-backend.jar
ENTRYPOINT ["/usr/lib/jre/bin/java", "--enable-preview", "-XX:MaxRAMPercentage=75.0", "-XX:+UseCompactObjectHeaders", "-XX:MaxMetaspaceSize=64m", "-Xss256k", "-jar", "./manga-backend.jar"]

