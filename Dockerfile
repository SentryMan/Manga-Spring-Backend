# Simple Dockerfile adding Maven and GraalVM Native Image compiler to the standard
# https://github.com/orgs/graalvm/packages/container/package/graalvm-ce image
FROM ghcr.io/sentryman/java-16-graalvm-build-image AS Native-Image-Compiler

COPY ./target/manga-backend-*jar $HOME/manga-backend.jar

#Compile Image
RUN jar -xvf manga-backend.jar && cp -R META-INF BOOT-INF/classes\
    && native-image \ 
    # --static --libc=musl \
    -H:Name=manga-backend -cp BOOT-INF/classes:`find BOOT-INF/lib | tr '\n' ':'`

# We use a Docker multi-stage build here in order that we only take the compiled native Spring Boot App from the first build container
FROM frolvlad/alpine-glibc

LABEL Author="The Man Himself, Josiah"

# Copy native app to Container
COPY --from=Native-Image-Compiler "/build/manga-backend" manga-backend

# Fire up our native app by default
ENTRYPOINT ["/manga-backend" ]