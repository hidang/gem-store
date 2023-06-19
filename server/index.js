const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/app_error');
const app = express();

app.use(morgan('tiny'));

const ENV = 'development';
const DOMAIN = ENV === 'development' ? 'localhost' : '';
const PORT = 3001;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});
app.use(express.json({ extended: false }));
// app.use(express.urlencoded({ extended: true }));

// for testing server
app.get('/mock-api', (req, res) => {
  try {
    res.json(require('./mock/data.json'));
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Products api
require('./routes/product/product.routes')(app);
require('./routes/product/purchase_invoice.routes')(app);
require('./routes/supplier.routes')(app);
require('./routes/product/product_type.routes')(app);
require('./routes/product/unit.routes')(app);
require('./routes/customer.routes')(app);
require('./routes/service/service.routes')(app);
require('./routes/service/service_type.routes')(app);
require('./routes/service/service_invoice.routes')(app);
require('./routes/product/sales_invoice.routes')(app);
require('./routes/product/product_on_sale.routes')(app);
require('./routes/product/product_in_stock.routes')(app);

app.listen(PORT, `${DOMAIN}`, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.all('*', (req, res, next) => {
  const error = new AppError(`Can't find ${req.originalUrl} on this server`, 404);
  next(error);
});

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message, err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
