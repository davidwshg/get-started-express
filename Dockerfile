FROM node:alpine

RUN npm install -g pm2

ENV port=80

EXPOSE 80

WORKDIR /usr/app

ADD . .

RUN npm install
RUN npm run build

CMD npm start
