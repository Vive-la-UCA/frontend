# Frontend

This project is the frontend for the Universidad Centroamericana (UCA) mapping and routing application. It is an admin dashboard built using Next.js and modern web technologies to provide a user-friendly interface for creating and managing locations, routes, badges, and viewing users.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Using Docker Compose](#using-docker-compose)
  - [Using Docker](#using-docker)
  - [Using npm](#using-npm)
- [Usage](#usage)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop) (for containerization)
- [Git](https://git-scm.com/downloads) (for cloning the repository)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Vive-la-UCA/frontend.git
cd frontend
```

### Using Docker Compose

1. Build and start the Docker containers:

```bash
docker-compose build
docker-compose up
```

This will start the application on `http://localhost:5555/admin-front`.

### Using Docker

1. Build the Docker image:

```bash
docker build -t admin-front .
```

2. Run the Docker container:

```bash
docker run -d -p 5555:5555 admin-front
```

This will start the application on `http://localhost:5555/admin-front`. And the name of the container is `admin-front`

### Using npm

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

This will start the application on `http://localhost:5555/admin-front`.

## Usage

Once the development server is running, you can access the admin dashboard in your web browser at the respective URL. The dashboard provides various features including:

- Creating new locations
- Creating new routes
- Managing badges
- Viewing and managing users
- Interacting with the map to select coordinates
- Uploading images for locations

Ask an administrator for the admin login credentials.
