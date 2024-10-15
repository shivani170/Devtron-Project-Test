# Use the Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on (for example, 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
