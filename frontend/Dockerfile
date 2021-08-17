FROM node:12 AS build

ADD package.json /package.json
ADD package-lock.json /package-lock.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN npm ci

WORKDIR /app
ADD . /app

EXPOSE 8000
EXPOSE 35729

RUN npm run-script build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
