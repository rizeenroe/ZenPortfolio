// server.js
const express = require('express');
const app = express();
const port = 8000;

// Enable CORS to allow React frontend to communicate with the backend
const cors = require('cors');
app.use(cors());

// Sample route
app.get('/api', (req, res) => {
  res.json({ message: 'Coming Soon.... FR' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
