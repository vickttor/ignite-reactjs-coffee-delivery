# Use an official Node.js runtime as a parent image
FROM node:hydrogen AS build

# Set the working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server to serve the application
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY --from=build /usr/app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chgrp -R 0 /usr/share/nginx/html /etc/nginx/nginx.conf && \
    chmod -R g=u /usr/share/nginx/html /etc/nginx/nginx.conf

# Add S2I scripts
COPY .s2i/bin/ /usr/libexec/s2i/

# Set permissions for S2I scripts
RUN chmod +x /usr/libexec/s2i/assemble /usr/libexec/s2i/run

# Expose port 8080
EXPOSE 8080

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]