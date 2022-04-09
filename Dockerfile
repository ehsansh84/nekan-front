FROM node:lts-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock ./
# COPY package.json /app
COPY . /app
RUN yarn install
# RUN npm run build
# RUN npm start
EXPOSE 3000
CMD yarn start
