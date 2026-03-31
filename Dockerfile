FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ARG VITE_APP_ENV=production
RUN VITE_APP_ENV=$VITE_APP_ENV npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
