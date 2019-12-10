FROM amd64/node:10.17-alpine3.9
WORKDIR /usr/src/app
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 9092
CMD ["npm","start"]