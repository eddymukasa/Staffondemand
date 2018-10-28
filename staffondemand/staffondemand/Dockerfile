FROM  node:9-alpine

ENV NODE_ENV production

RUN mkdir /app

WORKDIR /app

#COPY package-lock.json /app
#COPY package.json /app
COPY . /app

RUN npm install

RUN npm install -g pm2


# RUN npm run build

EXPOSE 3000

ENTRYPOINT ["pm2-docker", "server/app.js" ]

