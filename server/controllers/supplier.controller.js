const db = require('../models');
const Suppliers = db.Suppliers;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.name || !body.phone) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Supplier
  const supplier = {
    name: body.name,
    address: body.address,
    phone: body.phone
  };

  console.debug('### Create Supplier: ', supplier);

  // Save Supplier in the database
  Suppliers.create(supplier)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Supplier.'
      });
    });
};

exports.findAll = (req, res) => {
  Suppliers.findAll({ include: ['products'] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Suppliers.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Suppliers.findByPk(id, { include: ['products'] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Supplier with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Supplier with id=' + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Suppliers.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Supplier was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Supplier with id=${id}. Maybe Supplier was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Supplier with id=' + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Suppliers.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Supplier was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Supplier with id=${id}. Maybe Supplier was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Supplier with id=' + id
      });
    });
};
