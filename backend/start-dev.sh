#!/bin/bash -xe
#
# Script to be run from the docker container

mvn -Dflyway.configFiles=flyway-migrations.conf flyway:clean
mvn -Dflyway.configFiles=flyway-migrations.conf flyway:migrate
mvn spring-boot:run