FROM node:10-alpine as build

RUN apk add --no-cache bash git python cairo-dev build-base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . /app
RUN npm run build

FROM nginx:alpine
WORKDIR /etc/nginx
RUN apk add --no-cache bash
COPY ./.build/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ui-kit-panel /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
