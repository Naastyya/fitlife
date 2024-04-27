FROM node:16
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN npm install
EXPOSE 80
CMD ["node","app.js"]