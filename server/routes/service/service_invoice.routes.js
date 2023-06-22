module.exports = (app) => {
  const service_invoice = require('../../controllers/service/service_invoice.controller.js');
  const router = require('express').Router();

  // Create a new service_invoice
  router.post('/', service_invoice.create);

  // Retrieve all service_invoice
  router.get('/', service_invoice.findAll);

  // Retrieve a single service_invoice with id
  router.get('/:id', service_invoice.findOne);

  // Update a service_invoice with id
  router.put('/:id', service_invoice.update);

  router.delete('/', service_invoice.deleteByIds);

  // Delete a service_invoice with id
  router.delete('/:id', service_invoice.delete);

  app.use('/api/service_invoice', router);
};
