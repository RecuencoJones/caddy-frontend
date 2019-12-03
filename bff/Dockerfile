FROM node:dubnium

ENV NODE_PORT 3000

WORKDIR /app

COPY . .

RUN npm ci --production

CMD node index.js
