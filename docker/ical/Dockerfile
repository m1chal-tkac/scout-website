FROM node:lts

WORKDIR /app

COPY ical/index.js ./

EXPOSE 8080

CMD ["node", "--experimental-fetch", "index.js"]