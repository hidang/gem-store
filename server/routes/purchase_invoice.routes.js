module.exports = (app) => {
  const purchase_invoice = require('../controllers/purchase_invoice.controller.js');
  const router = require('express').Router();

  router.post('/', purchase_invoice.create);

  router.get('/', purchase_invoice.findAll);

  router.get('/:id', purchase_invoice.findOne);

  router.put('/:id', purchase_invoice.update);

  router.delete('/:id', purchase_invoice.delete);

  app.use('/api/purchase_invoice', router);
};
