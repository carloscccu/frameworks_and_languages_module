Client
======
# FreeCycle Client Application

## Overview
FreeCycle is a React-based web application focused on efficient item management. It allows users to create, view, and delete items with various attributes such as User ID, geolocation, and descriptions.

## Features
- **Create Items**: Add new items with details like User ID, Latitude, Longitude, Description, Image URL, and Keywords.
- **View Items**: Display a list of all created items.
- **Delete Items**: Remove items from the list.

## Technology
- React
- Material-UI
- Node.js (Alpine Linux)
- Docker

## Setup and Installation

### Prerequisites
- Node.js
- Docker (for containerization)

### Local Setup
1. Clone the repository.
2. Navigate to the client folder.
3. Install dependencies: `npm install`.

### Running the Application

#### Locally without Docker
- Execute `npm start`.
- The application will be available at `http://localhost:8001`.

#### Using Docker
1. Build the Docker image: `docker build -t client .`
2. Run the Docker container: `docker run --rm -it --publish 8001:8001 client`
3. Access the application at `http://localhost:8001`.

## Contribution
Contributions are welcome. Please read the contribution guidelines for more information.