multi stage build
ham chahte hai ki ki base image se mai development mode or production mode run krna chahta hu
toh is file mai ham yahi dekhenge

FROM node:16-alpine
WORKDIR /app
COPY packege* .
RUN npm i 

FROM base AS development
COPY ..
CMD["npm","dev"]

FROM base AS production
COPY . .
RUN npm prune --production
CMD["npm","start"]

#run this to create development build
docker build . -t --target development  myapp

#to interact with development mode we need to use this
docker run -p 3001:3000 -v <current files path>:<dockre image files path>myapp:dev
docker run -p 3001:3000 -v .:/app myapp:dev
