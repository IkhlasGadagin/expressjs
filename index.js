require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/order', (req, res) => {
  res.send('Order API: Fetching orders...');
});

app.get('/verify', (req, res) => {
  res.send('Verify API: Verifying user...');
});

app.get('/login', (req, res) => {
  res.send('Login API: Please enter your credentials.');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
