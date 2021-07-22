# Simple Dockerfile adding Maven and GraalVM Native Image compiler to the standard
# https://github.com/orgs/graalvm/packages/container/package/graalvm-ce image

FROM ghcr.io/graalvm/graalvm-ce:latest
ADD . /build
WORKDIR /build

RUN microdnf install maven

RUN gu install native-image;

RUN native-image --version

RUN mvn clean package

RUN mvn clean package -P native

# We use a Docker multi-stage build here in order that we only take the compiled native Spring Boot App from the first build container
FROM scratch

MAINTAINER Josiah Noel

# Add Spring Boot Native app spring-boot-graal to Container
COPY --from=0 "/build/target/manga-backend" manga-backend

# Fire up our Spring Boot Native app by default
CMD [ "sh", "-c", "./manga-backend" ]