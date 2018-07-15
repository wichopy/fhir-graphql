# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3005
CMD ["npm", "start"]
