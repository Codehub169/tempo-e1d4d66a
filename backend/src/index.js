const express = require('express');
const path = require('path');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const initializeDatabase = require('./database/database');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'build')));

// Initialize Database
const db = initializeDatabase(); // This will set up the SQLite database

// API Routes
// Pass the database instance to the routes
app.use('/api/contact', contactRoutes(db));

// All other GET requests not handled by API routes will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('Serving frontend from: ', path.join(__dirname, '..', '..', 'frontend', 'build'));
});
