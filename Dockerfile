FROM node:hydrogen

WORKDIR /usr/src/app

COPY package*.json .
RUN npm ci

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]