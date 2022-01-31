const express = require('express');

const app = express(); //it's working
const products = ['Apple', 'Google', 'Pinterest'];

app.get('/', (req, res, next) => {
  res.send("It's working");
});

app.get('/products', (req, res, next) => {
  res.send(products);
  // res.json({products});
});

app.get('/products/:id', (req, res, next) => {
  if(products[req.params.id]){
      res.send(products[req.params.id]);
  } else {
      res.status(404).send('Products not found');
  }
});

app.listen(5000, () => {
  console.log("It's started...", new Date());
});