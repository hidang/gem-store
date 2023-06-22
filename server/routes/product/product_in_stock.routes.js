module.exports = (app) => {
  const product_in_stock = require('../../controllers/product/product_in_stock.controller.js');
  const router = require('express').Router();

  router.get('/', product_in_stock.findAll);

  // router.get('/:id', product_in_stock.findOne);
  router.delete('/', product_in_stock.deleteByIds);

  app.use('/api/product_in_stock', router);
};
