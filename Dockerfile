# pull the base image
FROM node:16-alpine as build

# set the working direction
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

# install app dependencies
RUN npm ci

# add app
COPY . ./

RUN npm run build

EXPOSE 3000

# start app
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]