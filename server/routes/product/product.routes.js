module.exports = (app) => {
  const product = require('../../controllers/product/product.controller.js');
  const router = require('express').Router();

  // Create a new product
  router.post('/', product.create);

  // Retrieve all product
  router.get('/', product.findAll);

  // Retrieve a single product with id
  router.get('/:id', product.findOne);

  // Update a product with id
  router.put('/:id', product.update);

  router.delete('/', product.deleteByIds);

  // Delete a product with id
  router.delete('/:id', product.delete);

  app.use('/api/product', router);
};
