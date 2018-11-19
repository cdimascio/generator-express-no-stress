FROM node:10.13-alpine
LABEL Author Carmine DiMascio <dimascio@us.ibm.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
