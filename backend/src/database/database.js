const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define the path to the database file. It's in backend/data/hueneu.sqlite
const dbPath = path.resolve(__dirname, '..', '..', 'data', 'hueneu.sqlite');

// Function to initialize the database connection and create tables if they don't exist
const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    // Connect to the SQLite database. The file will be created if it doesn't exist.
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
        return reject(err);
      }
      console.log('Connected to the hueneu SQLite database.');
    });

    // SQL statement to create the 'contacts' table
    // It includes an auto-incrementing ID, name, email, message, and a submission timestamp
    const createTableSql = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Execute the SQL statement to create the table
    db.run(createTableSql, (err) => {
      if (err) {
        console.error('Error creating contacts table:', err.message);
        db.close(); // Close connection on error
        return reject(err);
      }
      console.log('"contacts" table initialized or already exists.');
      resolve(db); // Resolve the promise with the database instance
    });
  });
};

module.exports = { initializeDatabase };
