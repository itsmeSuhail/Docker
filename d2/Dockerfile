FROM node:16-alpine
WORKDIR /app
COPY package* .
RUN npm i
COPY . .
EXPOSE 3000
#CMD ["node","index1.js"]
CMD  ["node","index.js"]
