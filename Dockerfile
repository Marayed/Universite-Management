FROM node:18 as build

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

COPY frontend/ .
RUN npm run build -- --configuration production

FROM nginx:alpine

COPY --from=build /app/dist/university-management /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
