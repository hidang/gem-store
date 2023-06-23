module.exports = (app) => {
  const service_type = require('../../controllers/service/service_type.controller.js');
  const router = require('express').Router();

  // Create a new service_type
  router.post('/', service_type.create);

  // Retrieve all service_type
  router.get('/', service_type.findAll);

  // Retrieve a single service_type with id
  router.get('/:id', service_type.findOne);

  // Update a service_type with id
  router.put('/:id', service_type.update);

  router.delete('/', service_type.deleteByIds);

  // Delete a service_type with id
  router.delete('/:id', service_type.delete);

  app.use('/api/service_type', router);
};
