FROM amd64/node:10.17-alpine3.9
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]
