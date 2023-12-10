Server
======

# Express Server Application

## Overview
This application is an Express-based server, designed to manage and serve item data. It supports operations such as creating, retrieving, and deleting items.

## Features
- Create new items with user-defined attributes.
- Retrieve individual items or all items.
- Delete items based on their unique ID.

## Technology Stack
- Express
- Node.js
- Docker

## Setup and Installation

### Prerequisites
- Node.js
- Docker (for containerization)

### Installation
1. Clone the repository.
2. Navigate to the server directory.
3. Install dependencies: `npm install`.

### Running the Server

#### Locally without Docker
- Execute `npm start`.
- The server will be available at `http://localhost:8000`.

#### Using Docker
1. Build the Docker image: `docker build -t server .`
2. Run the Docker container: `docker run --rm -it --publish 8000:8000 server`
3. Access the server at `http://localhost:8000`.

## API Endpoints
- `GET /`: Welcome message.
- `POST /item`: Create a new item.
- `GET /item/:id`: Retrieve a specific item.
- `GET /items`: Retrieve all items.
- `DELETE /item/:id`: Delete a specific item.

## Contribution
Contributions are welcome. Please adhere to standard Node.js development practices.

