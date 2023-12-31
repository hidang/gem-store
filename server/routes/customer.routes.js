module.exports = (app) => {
  const customer = require('../controllers/customer.controller.js');
  const router = require('express').Router();

  // Create a new customer
  router.post('/', customer.create);

  // Retrieve all customer
  router.get('/', customer.findAll);

  // Retrieve a single customer with id
  router.get('/:id', customer.findOne);

  // Update a customer with id
  router.put('/:id', customer.update);

  router.delete('/', customer.deleteByIds);

  // Delete a customer with id
  router.delete('/:id', customer.delete);

  app.use('/api/customer', router);
};
