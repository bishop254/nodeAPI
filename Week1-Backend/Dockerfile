FROM node:latest

WORKDIR /backend_app

COPY package*.json /backend_app

RUN npm install

COPY . /backend_app

EXPOSE 6500

CMD ["node", "/backend_app/index.js"]