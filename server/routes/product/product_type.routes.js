module.exports = (app) => {
  const product_type = require('../../controllers/product/product_type.controller.js');
  const router = require('express').Router();

  // Create a new product_type
  router.post('/', product_type.create);

  // Retrieve all product_type
  router.get('/', product_type.findAll);

  // Retrieve a single product_type with id
  router.get('/:id', product_type.findOne);

  // Update a product_type with id
  router.put('/:id', product_type.update);

  // Delete a product_type with id
  router.delete('/:id', product_type.delete);

  app.use('/api/product_type', router);
};
