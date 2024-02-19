FROM node:20.11.1

WORKDIR /usr/www/app

COPY . .

RUN npm install

EXPOSE 4173

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]
