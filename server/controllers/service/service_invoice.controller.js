const db = require('../../models');
const ServiceInvoices = db.ServiceInvoices;
const Services = db.Services;

const Op = db.Sequelize.Op;

// Create and Save a new ServiceInvoice
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.customerId) {
    res.status(400).send({
      message: 'customerId can not be empty!'
    });
    return;
  }

  // Create a ServiceInvoice
  const serviceInvoice = {
    customerId: body.customerId
  };

  console.debug('### Create a ServiceInvoice: ', serviceInvoice);

  // Save ServiceInvoice in the database
  ServiceInvoices.create(serviceInvoice)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the ServiceInvoice.'
      });
    });
};

exports.findAll = (req, res) => {
  ServiceInvoices.findAll({ include: ['services'] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving ServiceInvoices.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  ServiceInvoices.findByPk(id, { include: ['services'] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find ServiceInvoice with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving ServiceInvoice with id=' + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  ServiceInvoices.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'ServiceInvoice was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update ServiceInvoice with id=${id}. Maybe ServiceInvoice was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating ServiceInvoice with id=' + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Services.destroy({
    where: { serviceInvoiceId: id }
  }).catch((err) => {
    console.debug('Error when delete Services include ServiceInvoices!');
  });

  ServiceInvoices.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'ServiceInvoice was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete ServiceInvoice with id=${id}. Maybe ServiceInvoice was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete ServiceInvoice with id=' + id
      });
    });
};
