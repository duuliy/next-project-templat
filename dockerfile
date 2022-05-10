
FROM node:11.12.0

COPY . /react-docker/dist

RUN npm install && npm run build && npm install -g http-server

WORKDIR /react-docker/dist
COPY . /react-docker/dist

EXPOSE 8080

CMD npx http-server ./dist