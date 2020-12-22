# -----------------------------------------------------------
# Build
# -----------------------------------------------------------
FROM node:14.15.0 AS build

WORKDIR /frontend

# Install dependencies
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install --frozen-lockfile

# Copy sources
COPY angular.json angular.json
COPY tsconfig.json tsconfig.json
COPY tsconfig.app.json tsconfig.app.json
COPY proxy.conf.json proxy.conf.json
COPY src src

EXPOSE 4200 49153

RUN node_modules/.bin/ng build

# -----------------------------------------------------------
# Runtime
# -----------------------------------------------------------
FROM nginx:1.19.6-alpine AS runtime

COPY --from=build /frontend/dist/frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
