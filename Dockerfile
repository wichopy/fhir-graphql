# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:alpine
# Note: The alpine build of node was chosen to reduce the image size.
# This means there is a very minimal version of linux running, with no Bash or Git by default inside the image.
# To include other libraries, check out: https://hub.docker.com/_/alpine/ for how to use apt-get
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3005
CMD ["npm", "start"]
