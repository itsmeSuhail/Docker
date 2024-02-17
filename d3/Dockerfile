FROM node:16-alpine AS base
WORKDIR /app
COPY package* .
RUN npm install
EXPOSE 3000

FROM base AS development
COPY . .
CMD ["npm","run","dev"]

FROM base AS production
COPY . .
RUN npm prune --production
CMD ["npm","run","start"]
