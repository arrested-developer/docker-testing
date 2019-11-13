# Installs the node image
FROM node

# Creates the client directory in the container
RUN mkdir -p /app/client

# Sets the working directory to the client directory
WORKDIR /app/client

# Copies the package.json to the container
COPY package*.json ./

# Installs the client dependencies
RUN npm install

# Copies the files from the client directory to the container
COPY . ./

# Runs the client
CMD ["npm", "start"]