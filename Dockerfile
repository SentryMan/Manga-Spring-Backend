FROM amazoncorretto:20-alpine-jdk as jreBuilder

RUN apk add binutils
COPY ./target/modules /modules
RUN jlink \
    --add-modules manga.spring \
    --module-path /modules:${JAVA_HOME}/jmods \
    --strip-debug \
    --compress 2 \
    --no-header-files \
    --no-man-pages \
    --output /jre 

FROM alpine

COPY --from=jreBuilder /jre /usr/lib/jre
ENTRYPOINT ["/usr/lib/jre/bin/java","--enable-preview", "-XX:MaxRAMPercentage=80.0","-m", " manga.spring/com.mangasite.MangaBackendApplication"]