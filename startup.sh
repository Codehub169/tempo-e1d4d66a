#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Navigate to the backend directory and install dependencies
echo "Installing backend dependencies..."
cd backend
npm install

# Navigate to the frontend directory, install dependencies, and build the project
echo "Installing frontend dependencies and building frontend..."
cd ../frontend
npm install
npm run build

# Navigate back to the backend directory
cd ../backend

# Create data directory if it doesn't exist (for SQLite database)
mkdir -p ./data

# Start the backend server
echo "Starting backend server on port 9000..."
# The server will serve the frontend and listen on port 9000
node src/index.js
