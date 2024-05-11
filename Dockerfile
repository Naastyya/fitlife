FROM node:16
EXPOSE 80
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . /app
CMD ["node", "app.js"]
