# Stage 1: Build the Angular application
FROM node:18-alpine as build-stage
WORKDIR /app
COPY angular-app/package.json angular-app/package-lock.json* ./
RUN npm install
COPY angular-app/ .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
RUN rm /usr/share/nginx/html/index.html
COPY --from=build-stage /app/dist/angular-app/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


