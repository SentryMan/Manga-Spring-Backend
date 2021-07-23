# Simple Dockerfile adding Maven and GraalVM Native Image compiler to the standard
# https://github.com/orgs/graalvm/packages/container/package/graalvm-ce image
FROM oraclelinux:8 AS Compile-Native-Image

ENV HOME=/build
RUN mkdir -p $HOME/jdk
RUN mkdir -p $HOME/src
WORKDIR $HOME
RUN dnf install -y wget tar maven gzip gcc zlib-devel

ENV JAVA_HOME=$HOME/jdk/graalvm-ce-java11-21.2.0
ENV PATH=$PATH:$HOME/jdk/graalvm-ce-java11-21.2.0/bin:$JAVA_HOME
RUN cd jdk \
    && wget "https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-21.2.0/graalvm-ce-java11-linux-amd64-21.2.0.tar.gz" \
    && tar -xzf graalvm-ce-java11-linux-amd64-21.2.0.tar.gz 


RUN gu install native-image
ADD ./pom.xml $HOME
RUN mvn clean dependency:resolve-plugins dependency:resolve -P native

#Compile Image
ADD ./src /build/src
RUN native-image --version
RUN mvn clean package -P native

# We use a Docker multi-stage build here in order that we only take the compiled native Spring Boot App from the first build container
FROM scratch

MAINTAINER Josiah Noel


ENV PATH=$PATH:manga-backend
# Add Spring Boot Native app spring-boot-graal to Container
COPY --from=Compile-Native-Image "/build/target/manga-backend" manga-backend

# Fire up our Spring Boot Native app by default