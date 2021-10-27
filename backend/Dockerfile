# Create image based on the official Node image from dockerhub
FROM node:lts-slim

# Create app directory
WORKDIR /server

# Copy dependency definitions
COPY package*.json ./

# Install dependecies
RUN npm ci

# Get all the code needed to run the app
COPY . ./

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD [ "npm", "start" ]
