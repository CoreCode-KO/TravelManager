FROM node:16-alpine3.14

WORKDIR /app

COPY . .

EXPOSE 4200:4200

RUN npm install -g @angular/cli && npm install

CMD ["ng","serve","--host", "0.0.0.0"]