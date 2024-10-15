# Use the Node.js 20 base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) for dependency installation
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the rest of the application files to the working directory
COPY . .

# # Expose the port that your application will run on (e.g., 3000)
# EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]