FROM node:lts-alpine
RUN mkdir /app
WORKDIR /app
# COPY package.json /app
COPY . /app
RUN npm install
# RUN npm run build
# RUN npm start
EXPOSE 3000
CMD npm start