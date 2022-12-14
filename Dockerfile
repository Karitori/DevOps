FROM node:16
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN npm install
RUN npm install yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
