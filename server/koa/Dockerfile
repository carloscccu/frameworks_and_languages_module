# Use the official Node.js image as a parent image
FROM node

# Set the working directory
WORKDIR /app/

# First, copy the package.json file. This is done separately to leverage Docker cache
COPY /package.json .

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Define the command to run your app using the node binary
ENTRYPOINT ["node", "app.js"]
