const express = require('express');
const bookRouter = express.Router();
const app = express(); //it's working
const products = ['Apple', 'Google', 'Pinterest'];

// app.set('view engine', 'pug');
// app.set('view engine', 'ejs');
app.set('view engine', 'hbs');

app.set('views', './views');

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

// route for main pug v
app.get('/main', (req, res, next) => {
  res.render('main', {
    title: 'Products',
    message: 'Products List',
    products: products
  });
});

// route for main ejs v
app.get('/ejs', (req, res, next) => {
  res.render('main', {
    title: 'Products',
    message: 'Products List',
    products: products
  });
});

// route for main hbs v
app.get('/hbs', (req, res, next) => {
  res.render('main.hbs', {
    title: 'Products',
    message: 'Products List',
    products: products
  });
});



bookRouter.get('/', (req, res) =>{
  res.send('Book');
});
bookRouter.get('/about', (req, res) => {
  res.send('About book');
});
app.use('/book', bookRouter);

//show an error
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.stack);
});

app.listen(5000, () => {
  console.log("It's started...", new Date());
});