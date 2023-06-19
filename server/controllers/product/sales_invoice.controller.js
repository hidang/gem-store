const db = require('../../models');
const SalesInvoices = db.SalesInvoices;
const ProductOnSales = db.ProductOnSales;
const Op = db.Sequelize.Op;

// Create and Save a new SalesInvoice
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.customer_id) {
    res.status(400).send({
      message: 'customer_id can not be empty!'
    });
    return;
  }

  // Create a SalesInvoice
  const salesInvoice = {
    customer_id: body.customer_id
  };

  console.debug('###', salesInvoice);

  // Save SalesInvoice in the database
  SalesInvoices.create(salesInvoice)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the SalesInvoice.'
      });
    });
};

exports.findAll = (req, res) => {
  SalesInvoices.findAll({ include: ['productOnSales'] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving SalesInvoices.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  SalesInvoices.findByPk(id, { include: ['productOnSales'] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find SalesInvoice with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving SalesInvoice with id=' + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  SalesInvoices.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'SalesInvoice was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update SalesInvoice with id=${id}. Maybe SalesInvoice was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating SalesInvoice with id=' + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  ProductOnSales.destroy({
    where: { salesInvoice_id: id }
  }).catch((err) => {
    console.debug('Error when delete ProductOnSales include SalesInvoices!');
  });

  SalesInvoices.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'SalesInvoice was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete SalesInvoice with id=${id}. Maybe SalesInvoice was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete SalesInvoice with id=' + id
      });
    });
};
