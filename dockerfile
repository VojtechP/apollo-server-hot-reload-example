FROM node:12-alpine

WORKDIR /app

RUN npm install -g webpack webpack-cli

COPY ./package*.json ./
RUN npm install

COPY ./src ./src
COPY ./webpack.*.js ./

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]
