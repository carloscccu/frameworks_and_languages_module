# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json from the Angular app directory
COPY angular-app/package.json angular-app/package-lock.json* ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
COPY angular-app/ .

# Make port 8001 available to the world outside this container
EXPOSE 8001

# Define environment variable
ENV PORT 8001

# Build the Angular app
RUN npm run build

# Run the app when the container launches
CMD ["npm", "start"]

