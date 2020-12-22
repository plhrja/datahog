# -----------------------------------------------------------
# Build
# -----------------------------------------------------------
FROM maven:3.6.3-openjdk-11-slim AS build

WORKDIR /backend

# Download dependencies
COPY pom.xml pom.xml
RUN mvn dependency:resolve

COPY src src

RUN mvn clean package

# -----------------------------------------------------------
# Runtime
# -----------------------------------------------------------
FROM openjdk:11-jre-slim AS runtime

WORKDIR /backend

COPY --from=build /backend/target/server-0.0.1-SNAPSHOT.jar .

CMD ["java", "-jar", "server-0.0.1-SNAPSHOT.jar"]
