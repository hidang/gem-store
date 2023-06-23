const db = require('../../models');
const PurchaseInvoices = db.PurchaseInvoices;
const Products = db.Products;
const Op = db.Sequelize.Op;

// Create and Save a new PurchaseInvoice
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.supplier_id) {
    res.status(400).send({
      message: 'supplier_id can not be empty!'
    });
    return;
  }
  // Create a PurchaseInvoice
  const purchaseInvoice = {
    supplier_id: body.supplier_id,
    createdAt: body.createdAt ?? new Date().toISOString()
  };

  console.debug('### Create a PurchaseInvoice: ', purchaseInvoice);

  // Save PurchaseInvoice in the database
  PurchaseInvoices.create(purchaseInvoice)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the PurchaseInvoice.'
      });
    });
};

exports.findAll = (req, res) => {
  PurchaseInvoices.findAll({ include: ['products'] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving PurchaseInvoices.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  PurchaseInvoices.findByPk(id, { include: ['products'] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find PurchaseInvoice with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving PurchaseInvoice with id=' + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  PurchaseInvoices.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'PurchaseInvoice was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update PurchaseInvoice with id=${id}. Maybe PurchaseInvoice was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating PurchaseInvoice with id=' + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Products.destroy({
    where: { purchaseInvoice_id: id }
  }).catch((err) => {
    console.debug('Error when delete Products include PurchaseInvoices!');
  });

  PurchaseInvoices.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'PurchaseInvoice was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete PurchaseInvoice with id=${id}. Maybe PurchaseInvoice was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete PurchaseInvoice with id=' + id
      });
    });
};

exports.deleteByIds = (req, res) => {
  const ids = JSON.parse(req.query?.filter ?? '{}').id ?? [];
  PurchaseInvoices.destroy({
    where: { id: ids }
  })
    .then((num) => {
      if (num) {
        res.send({
          message: 'PurchaseInvoices was deleted successfully! ' + num
        });
      } else {
        res.send({
          message: `Cannot delete PurchaseInvoices with ids=${ids}. Maybe PurchaseInvoices was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete PurchaseInvoices with id=' + ids
      });
    });
};
