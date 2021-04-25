FROM node:15.14.0-alpine

WORKDIR /usr/app

ADD ./package.json .
ADD ./package-lock.json .
RUN npm install

ADD . .

RUN npm run build

CMD npm start
