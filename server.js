const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const host = '0.0.0.0';


app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from Express!' });
});

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
