module.exports = (app) => {
  const service = require('../../controllers/service/service.controller.js');
  const router = require('express').Router();

  // Create a new service
  router.post('/', service.create);

  // Retrieve all service
  router.get('/', service.findAll);

  // Retrieve a single service with id
  router.get('/:id', service.findOne);

  // Update a service with id
  router.put('/:id', service.update);

  router.delete('/', service.deleteByIds);

  // Delete a service with id
  router.delete('/:id', service.delete);

  app.use('/api/service', router);
};
