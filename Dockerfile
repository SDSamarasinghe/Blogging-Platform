FROM node:15.5.0

WORKDIR /the/workdir/path

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

