FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/assets /usr/share/nginx/html/assets
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]