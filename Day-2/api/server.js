const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize SQLite database
const dbPath = path.join(__dirname, 'messages.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
    
    // Create messages table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Messages table ready.');
      }
    });
  }
});

// GET endpoint to retrieve all messages
app.get('/messages', (req, res) => {
  db.all('SELECT * FROM messages ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching messages:', err.message);
      res.status(500).json({ error: 'Failed to fetch messages' });
    } else {
      res.json(rows);
    }
  });
});

// POST endpoint to save a message
app.post('/messages', (req, res) => {
  const { message } = req.body;
  
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required and must be a string' });
  }
  
  db.run('INSERT INTO messages (message) VALUES (?)', [message], function(err) {
    if (err) {
      console.error('Error inserting message:', err.message);
      res.status(500).json({ error: 'Failed to save message' });
    } else {
      res.status(201).json({ 
        id: this.lastID, 
        message: message,
        created_at: new Date().toISOString()
      });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});

