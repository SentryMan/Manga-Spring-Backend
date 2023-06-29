FROM amazoncorretto:20-alpine-jdk as jreBuilder

RUN apk add binutils
RUN jlink \
    --add-modules \
    java.base,java.desktop,java.instrument,java.logging,java.management,java.naming,java.net.http,java.sql,java.xml,jdk.crypto.ec,jdk.naming.dns,jdk.unsupported,jdk.incubator.concurrent\
    --verbose \
    --strip-debug \
    --compress 2 \
    --no-header-files \
    --no-man-pages \
    --output /jre

FROM scratch

COPY --from=jreBuilder /jre /usr/lib/jre
COPY --from=jreBuilder /lib/*musl* /lib/
COPY ./target/manga-backend-*jar manga-backend.jar
ENTRYPOINT ["/usr/lib/jre/bin/java","--enable-preview", "--add-modules=jdk.incubator.concurrent", "-XX:MaxRAMPercentage=80.0","-jar", "./manga-backend.jar"]

