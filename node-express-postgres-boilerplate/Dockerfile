# Use official Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first for caching
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the app files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "dev"]