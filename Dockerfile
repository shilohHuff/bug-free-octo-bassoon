#Stage 1
FROM node:7.10 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
COPY . ./
RUN npm run build

#Stage 2
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]