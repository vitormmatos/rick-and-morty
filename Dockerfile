### STAGE 1: Build ###
FROM node:current-alpine3.15 AS build
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

### STAGE 2: Run ###
FROM nginx:1.23.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/rick-and-morty /usr/share/nginx/html
