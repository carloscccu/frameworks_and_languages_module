# Stage 1: Build the Angular application
FROM node:18-alpine as build-stage
WORKDIR /app
COPY angular-app/package.json angular-app/package-lock.json* ./
RUN npm install
COPY angular-app/ .
RUN npm run build && ls -l /app/dist


# Stage 2: Serve the application using Nginx
FROM nginx:alpine
COPY --from=build-stage /app/dist/angular-app /usr/share/nginx/html
EXPOSE 8001

# Customize default nginx configuration
RUN echo "server { listen 8001; root /usr/share/nginx/html/browser; index index.html; }" > /etc/nginx/conf.d/default.conf
