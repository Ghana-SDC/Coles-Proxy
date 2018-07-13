FROM node:10

RUN mkdir /colesproxy

COPY . ./colesproxy

WORKDIR /colesproxy

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]