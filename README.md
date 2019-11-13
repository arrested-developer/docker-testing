# docker-testing

A demo of CI tests running in Docker

## Installation

### Before installing

- You will need npm installed on your machine
- You will need to have Docker desktop installed
- You will need to have no processes already running on localhost port 3000

### How to install

- clone this repo
- run `npm install` in the root folder

### How to use

- run `docker-compose up -d --build` to run the development environment locally
- run `docker-compose down` to spin down the Docker containers
- run `npm test` to run the test suite locally in Docker
