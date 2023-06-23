module.exports = (app) => {
  const product_on_sale = require('../../controllers/product/product_on_sale.controller.js');
  const router = require('express').Router();

  router.post('/', product_on_sale.create);

  router.get('/', product_on_sale.findAll);

  router.get('/:id', product_on_sale.findOne);

  router.put('/:id', product_on_sale.update);

  router.delete('/', product_on_sale.deleteByIds);

  router.delete('/:id', product_on_sale.delete);

  app.use('/api/product_on_sale', router);
};
