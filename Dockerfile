FROM node:alpine

RUN npm install -g yarn pm2

ENV APP_ROOT src

RUN mkdir ${APP_ROOT}
ADD . ${APP_ROOT}
WORKDIR ${APP_ROOT}

RUN yarn install
RUN yarn build

CMD yarn start
