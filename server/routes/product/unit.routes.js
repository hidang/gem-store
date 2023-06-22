module.exports = (app) => {
  const unit = require('../../controllers/product/unit.controller.js');
  const router = require('express').Router();

  // Create a new unit
  router.post('/', unit.create);

  // Retrieve all unit
  router.get('/', unit.findAll);

  // Retrieve a single unit with id
  router.get('/:id', unit.findOne);

  // Update a unit with id
  router.put('/:id', unit.update);

  router.delete('/', unit.deleteByIds);

  // Delete a unit with id
  router.delete('/:id', unit.delete);

  app.use('/api/unit', router);
};
