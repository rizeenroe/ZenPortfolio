const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000

// Middleware
app.use(cors());
app.use(express.json()); // to handle POST requests

// Example GET route
app.get('/', (req, res) => {
  res.status(200).send({
    message: "Hello from the backend"
  });
});

// Example POST route
app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}` });
});

// Vercel expects a handler to export for serverless functions
module.exports = (req, res) => {
  app(req, res);
};

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))