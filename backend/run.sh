#/bin/bash -xe

docker build . -t datahog-backend-build --target build
docker run -it --rm -p 8080:8080 -v "/$(pwd -W)/src:/backend/src" -v "/$(pwd -W)/target:/backend/target" datahog-backend-build mvn spring-boot:run
