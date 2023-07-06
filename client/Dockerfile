FROM node:16-alpine

WORKDIR /user/dedanews

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]