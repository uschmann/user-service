FROM node:latest
EXPOSE 3000
COPY . /user-service
WORKDIR /user-service
CMD npm start
