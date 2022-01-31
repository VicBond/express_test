const express = require('express');

const app = express(); //it's working

app.get('/', (req, res, next) => {
  res.send("It's working");
})

app.listen(5000, () => {
  console.log("It's started...", new Date());
});