FROM amd64/node:10.17-alpine3.9
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
WORKDIR /usr/src/app
EXPOSE 9092
CMD ["npm","start"]