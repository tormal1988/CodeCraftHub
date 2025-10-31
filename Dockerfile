# Use official Node.js image as base
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Command to run the app
CMD ["node", "./src/app.js"]