# server/Dockerfile-dev

# Install node image in container
FROM node

# Install nodemon for hot reloading
# RUN npm install -g nodemon

# Create and set the working directory
RUN mkdir -p /app/server
WORKDIR /app/server

# Copy the dependency files over
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server files over
COPY . .

# Command to run them
CMD ["nodemon", "app.js"]