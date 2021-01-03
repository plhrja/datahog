#!/bin/bash -xe
#
# Script to be run from the docker container

mvn -Dflyway.configFiles=flyway-migration.conf flyway:clean
mvn -Dflyway.configFiles=flyway-migration.conf flyway:migrate
mvn -Dflyway.configFiles=flyway-seed.conf flyway:migrate
mvn spring-boot:run