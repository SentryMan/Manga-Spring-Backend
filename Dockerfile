# Simple Dockerfile adding Maven and GraalVM Native Image compiler to the standard
# https://github.com/orgs/graalvm/packages/container/package/graalvm-ce image
FROM ghcr.io/graalvm/graalvm-ce:latest

ADD . /build
WORKDIR /build

# For SDKMAN to work we need unzip & zip
RUN yum install -y unzip zip

RUN gu install native-image

RUN native-image --version

RUN rm -rf target/native\
    mkdir -p target/native\
    cd target/native\
    jar -xvf ../manga-backend*.jar >/dev/null 2>&1\
    cp -R META-INF BOOT-INF/classes\
    native-image -H:Name=manga-backend -cp BOOT-INF/classes:`find BOOT-INF/lib | tr '\n' ':'`\
    mv manga-backend ../

# We use a Docker multi-stage build here in order that we only take the compiled native Spring Boot App from the first build container
FROM scratch

MAINTAINER Josiah Noel

# Add Spring Boot Native app spring-boot-graal to Container
COPY --from=0 "/build/target/native/manga-backend" manga-backend

# Fire up our Spring Boot Native app by default
CMD [ "sh", "-c", "./manga-backend" ]