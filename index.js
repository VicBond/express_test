const express = require('express');
const bookRouter = express.Router();
const app = express(); //it's working
const products = ['Apple', 'Google', 'Pinterest'];

app.use((req, res, next) => {
  console.log('Date', new Date(), 'Method', req.method, 'URL', req.originalUrl, 'IP', req.ip);
  next();
});

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.send("It's working");
});

app.get('/products', (req, res, next) => {
  // console.log('Page', req.query.page);
  res.send(products);
  // next();
  // res.json({products});
});

app.get('/products/:id', (req, res, next) => {
  if(products[req.params.id]){
      res.send(products[req.params.id]);
  } else {
      res.status(404).send('Product not found');
  }
});

app.get('/blog', (req, res, next) => {
  res.redirect('/')
});

app.get('/downloadBook', (req, res, next) => {
  res.download('./public/books.html', err => {
    console.log("File sent");
  });
});


bookRouter.get('/', (req, res) =>{
  res.send('Book');
});
bookRouter.get('/about', (req, res) => {
  res.send('About book');
});
app.use('/book', bookRouter);



app.listen(5000, () => {
  console.log("It's started...", new Date());
});