const db = require('../models');
const Customers = db.Customers;
const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.name || !body.phone) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Customer
  const customer = {
    name: body.name,
    dob: body.dob,
    address: body.address,
    phone: body.phone
  };

  console.debug('### Create a Customer: ', customer);

  // Save Customer in the database
  Customers.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Customer.'
      });
    });
};

exports.findAll = (req, res) => {
  Customers.findAll({ include: ['serviceInvoices'] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Customers.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Customers.findByPk(id, { include: ['serviceInvoices'] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Customer with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Customer with id=' + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Customers.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Customer was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Customer with id=' + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Customers.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Customer was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Customer with id=' + id
      });
    });
};

exports.deleteByIds = (req, res) => {
  const ids = JSON.parse(req.query?.filter ?? '{}').id ?? [];
  Customers.destroy({
    where: { id: ids }
  })
    .then((num) => {
      if (num) {
        res.send({
          message: 'Customers was deleted successfully! ' + num
        });
      } else {
        res.send({
          message: `Cannot delete Customers with ids=${ids}. Maybe Customers was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Customers with id=' + ids
      });
    });
};
