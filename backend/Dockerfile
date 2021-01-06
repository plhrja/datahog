# -----------------------------------------------------------
# Build
# -----------------------------------------------------------
FROM maven:3.6.3-openjdk-11-slim AS build

WORKDIR /backend

# Download dependencies
COPY pom.xml pom.xml
RUN mvn dependency:resolve

# Build project
COPY src src
RUN mvn clean package -Dmaven.test.skip=true 

# Copy migrations and configurations
COPY db db
COPY flyway-migration.conf flyway-migration.conf

# -----------------------------------------------------------
# Runtime
# -----------------------------------------------------------
FROM openjdk:11-jre-slim AS runtime

WORKDIR /backend

COPY --from=build /backend/target/server-0.0.1-SNAPSHOT.jar .

CMD ["java", "-jar", "server-0.0.1-SNAPSHOT.jar"]
