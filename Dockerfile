FROM node:20

WORKDIR /my-app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]
