FROM node:alpine

RUN npm install -g yarn

ENV APP_ROOT src

RUN mkdir ${APP_ROOT}
ADD . ${APP_ROOT}
WORKDIR ${APP_ROOT}
RUN yarn install --production

CMD yarn start
