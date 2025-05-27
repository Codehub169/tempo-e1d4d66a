const express = require('express');

module.exports = function(db) {
  const router = express.Router();

  // POST /api/contact - Handle contact form submissions
  router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
    }

    // Validate email format (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }

    const stmt = db.prepare('INSERT INTO contacts (name, email, message, submitted_at) VALUES (?, ?, ?, datetime(\'now\'))');
    
    stmt.run(name, email, message, function(err) {
      if (err) {
        console.error('Failed to save contact message:', err.message);
        return res.status(500).json({ error: 'Failed to save your message. Please try again later.' });
      }
      console.log(`A new contact message has been inserted with rowid ${this.lastID}`);
      res.status(201).json({ success: true, message: 'Message received! We will get back to you soon.', id: this.lastID });
    });
    stmt.finalize();
  });

  return router;
};
