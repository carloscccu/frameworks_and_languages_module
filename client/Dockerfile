# Use an official Node runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json from the React app directory
COPY react/my-app/package.json react/my-app/package-lock.json* ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
COPY react/my-app/ .

# Make port 8001 available to the world outside this container
EXPOSE 8001

# Define environment variable
ENV PORT 8001

# Run the app when the container launches
CMD ["npm", "start"]

