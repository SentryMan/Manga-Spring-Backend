# Simple Dockerfile adding Maven and GraalVM Native Image compiler to the standard
# https://github.com/orgs/graalvm/packages/container/package/graalvm-ce image
# FROM ghcr.io/graalvm/graalvm-ce:latest AS Native-Image-Compiler
FROM docker.io/library/java-19-graalvm-build-image  AS Native-Image-Compiler

ENV HOME=/build
WORKDIR $HOME
# Install native image utility
RUN gu install native-image && native-image --version
COPY ./target/manga-backend-*jar $HOME/manga-backend.jar

CMD java -agentlib:native-image-agent=config-output-dir=/configs --enable-preview -jar manga-backend.jar
#Compile Image
# RUN jar -xvf manga-backend.jar && cp -R META-INF BOOT-INF/classes\
#     && native-image \ 
#     # --static --libc=musl \
#     -cp BOOT-INF/classes:`find BOOT-INF/lib | tr '\n' ':'`

# # We use a Docker multi-stage build here in order that we only take the compiled native Spring Boot App from the first build container
# FROM alpine

# LABEL Author="The Man Himself, Josiah"

# # Copy native app to Container
# COPY --from=Native-Image-Compiler "/build/manga-backend" manga-backend

# RUN apk --no-cache add gcompat    

# # Fire up our native app by default
# ENTRYPOINT ["/manga-backend"]