FROM node:16-alpine

WORKDIR /app/client/

# COPY ./client/pacakge*.json .
COPY package* .

RUN npm install

COPY . .


EXPOSE 3000

CMD ["npm","run","start"]
