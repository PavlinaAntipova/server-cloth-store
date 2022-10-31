const express = require('express');
const logger = require('morgan');
const cors = require('cors');


const categoriesRouter = require('./routes/api/categories');
const productsRouter = require('./routes/api/products');
const offersRouter = require('./routes/api/offers');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);
app.use('/api/offers', offersRouter);

app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((err, req, res, next) => {
  if (err.status !== 500) {
    return res.status(err.status).json({
    status: 'error',
    code: err.status,
    message: err.message
     });
  }
  next(err);
 
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    status: 'fail',
    code: 500,
    message: err.message,
    data: 'Internal Server Error',
  });
});



module.exports = app;

