# Create image based on the official Node image from dockerhub
FROM node:14.0.0-alpine3.11 as builder

RUN apk add python make gcc g++

# Create app directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependecies
RUN npm ci
RUN npm install -g react-scripts@3.4.1

# Get all the code needed to run the app
COPY . ./

RUN npm run build

FROM nginx:stable-alpine

# Copy build files to nginx
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port the app runs in
EXPOSE 80

# Serve the app
CMD ["nginx", "-g", "daemon off;"]
