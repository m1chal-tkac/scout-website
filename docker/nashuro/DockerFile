FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile && yarn cache clean

ENV NODE_ENV=production

COPY . .

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]