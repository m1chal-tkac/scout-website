FROM node:lts

WORKDIR /app

COPY node-relay/index.js ./

EXPOSE 8080

CMD ["node", "--experimental-fetch", "index.js"]