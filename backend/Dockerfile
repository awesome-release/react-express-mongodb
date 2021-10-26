# Create image based on the official Node image from dockerhub
FROM node:lts-slim

# Add in python & build essentials for node-gyp
RUN apt-get update || : && apt-get install -y \
    python \
    build-essential

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json /usr/src/app

# Install dependecies
RUN npm ci

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD [ "npm", "start" ]
