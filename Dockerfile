# Simple Dockerfile adding Maven and GraalVM Native Image compiler to the standard
# https://github.com/orgs/graalvm/packages/container/package/graalvm-ce image
FROM oraclelinux:8 AS Native-Image-Compiler
ARG BUILDPLATFORM

ENV HOME=/build
ENV JAVA_HOME=$HOME/jdk/graalvm-ce-java16-21.3.0-dev
ENV PATH=$PATH:$HOME/jdk/graalvm-ce-java16-21.3.0-dev/bin:$JAVA_HOME
RUN mkdir -p $HOME/jdk
RUN mkdir -p $HOME/src
WORKDIR $HOME
RUN dnf config-manager --set-enabled ol8_codeready_builder && dnf install -y wget tar gcc glibc-devel zlib-devel libstdc++-static

RUN cd jdk \
    && wget "https://github.com/graalvm/graalvm-ce-dev-builds/releases/download/21.3.0-dev-20210721_1948/graalvm-ce-java16-linux-amd64-dev.tar.gz" \
    && tar -xzf graalvm-ce-java16-linux-amd64-dev.tar.gz 

RUN gu install native-image
ADD ./target $HOME/target
#Compile Image
RUN native-image --version
RUN cd target && jar -xvf manga-backend-*jar && cp -R META-INF BOOT-INF/classes\
    && native-image -H:Name=manga-backend -cp BOOT-INF/classes:`find BOOT-INF/lib | tr '\n' ':'`

# We use a Docker multi-stage build here in order that we only take the compiled native Spring Boot App from the first build container
FROM oraclelinux:8-slim

LABEL Author="The Man Himself, Josiah"

ENV PATH=$PATH:manga-backend
# Add Spring Boot Native app spring-boot-graal to Container
COPY --from=Native-Image-Compiler "/build/target/manga-backend" manga-backend
# Fire up our Spring Boot Native app by default
ENTRYPOINT ["/manga-backend" ]