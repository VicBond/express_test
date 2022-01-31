const express = require('express');

const app = express(); //it's working
const products = ['Apple', 'Google', 'Pinterest'];

app.get('/', (req, res, next) => {
  res.send("It's working");
});

app.get('/products', (req, res, next) => {
  res.send(products);
});

app.listen(5000, () => {
  console.log("It's started...", new Date());
});