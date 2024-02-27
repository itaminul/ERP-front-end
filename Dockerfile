# Use the official Node.js runtime parent image with Node.js version 16.16.0
FROM node:16.16.0

# Create and set the working directory in the container as /app
WORKDIR /app

# Copy the package.json file to the /app directory
COPY package.json .

# Install the application dependencies using npm
RUN npm install

# Copy the rest of the application code to the /app directory
COPY . .

# Define the command to start the application in development mode
CMD [ "npm", "start" ]
