const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Dishes');
});

app.get('/api/dishes', (req, res) => {
  res.sand(type: 'Sisig', province: 'Pampanga', price: 220);
});
