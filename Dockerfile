FROM node:lts
ENV NODE_ENV=production

WORKDIR /app
RUN npm install --global pm2

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

RUN [ "npm", "build" ]

EXPOSE 3000

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]