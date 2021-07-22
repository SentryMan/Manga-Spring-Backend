# Simple Dockerfile adding Maven and GraalVM Native Image compiler to the standard
# https://github.com/orgs/graalvm/packages/container/package/graalvm-ce image
FROM oraclelinux:7 AS Compile-Native-Image

ENV HOME=/build
# Dependencies
RUN mkdir -p $HOME/jdk
ADD ./pom.xml $HOME
WORKDIR $HOME
RUN yum install -y wget

RUN cd jdk && wget "https://github.com/graalvm/graalvm-ce-dev-builds/releases/download/21.3.0-dev-20210721_1948/graalvm-ce-java16-darwin-amd64-dev.tar.gz" 

RUN cd jdk \
    && tar -xzf graalvm-ce-java16-darwin-amd64-dev.tar.gz \
    && export PATH=$PATH:$HOME/jdk/graalvm-ce-java16-darwin-amd64-dev/bin\
    && export JAVA_HOME=$HOME/jdk/graalvm-ce-java16-darwin-amd64-dev\
    && export PATH=$PATH:$JAVA_HOME

RUN ECHO $JAVA_HOME && yum install -y maven && mvn clean dependency:resolve-plugins dependency:resolve -P native

#Compile Image
ADD . /build
RUN native-image --version
RUN mvn clean package -P native

# We use a Docker multi-stage build here in order that we only take the compiled native Spring Boot App from the first build container
FROM scratch

MAINTAINER Josiah Noel


# Add Spring Boot Native app spring-boot-graal to Container
COPY --from=Compile-Native-Image "/build/target/manga-backend" manga-backend

# Fire up our Spring Boot Native app by default
CMD [ "sh", "-c", "./manga-backend" ]