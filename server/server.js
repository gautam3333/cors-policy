const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'Welcome to CORS server 😊' });
});

app.get('/cors', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'This has CORS enabled 🎈' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// res.set('Access-Control-Allow-Origin', '*')
