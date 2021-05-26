FROM node:14

WORKDIR /

ENV PORT 80
ENV HOST 0.0.0.0

EXPOSE 80

COPY . /
RUN npm install

CMD npm start