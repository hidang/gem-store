module.exports = (app) => {
  const sales_invoice = require('../../controllers/product/sales_invoice.controller.js');
  const router = require('express').Router();

  router.post('/', sales_invoice.create);

  router.get('/', sales_invoice.findAll);

  router.get('/:id', sales_invoice.findOne);

  router.put('/:id', sales_invoice.update);

  router.delete('/:id', sales_invoice.delete);

  app.use('/api/sales_invoice', router);
};
