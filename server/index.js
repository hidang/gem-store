const express = require('express');
const app = express();

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
require('./routes/product.routes')(app);
require('./routes/purchase_invoice.routes')(app);
require('./routes/supplier.routes')(app);
require('./routes/product_type.routes')(app);
require('./routes/unit.routes')(app);

app.listen(PORT, `${DOMAIN}`, () => {
  console.log(`Server listening on port ${PORT}`);
});
