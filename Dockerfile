# Simple Dockerfile adding Maven and GraalVM Native Image compiler to the standard
# https://github.com/orgs/graalvm/packages/container/package/graalvm-ce image

FROM quay.io/quarkus/ubi-quarkus-native-image:21.1.0-java16

ENV HOME=/build
# Dependencies
USER root
RUN mkdir -p $HOME
ADD ./pom.xml $HOME
WORKDIR $HOME
RUN microdnf install maven
RUN mvn clean dependency:resolve-plugins dependency:resolve

#Compile Image
ADD . /build
RUN native-image --version
USER 1001
RUN mvn clean package -P native

# We use a Docker multi-stage build here in order that we only take the compiled native Spring Boot App from the first build container
FROM scratch

MAINTAINER Josiah Noel


# Add Spring Boot Native app spring-boot-graal to Container
COPY --from=0 "/build/target/manga-backend" manga-backend

# Fire up our Spring Boot Native app by default
CMD [ "sh", "-c", "./manga-backend" ]