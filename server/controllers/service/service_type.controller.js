const db = require('../../models');
const ServiceTypes = db.ServiceTypes;
const Op = db.Sequelize.Op;

// Create and Save a new ServiceType
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.name || !body.price) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a ServiceType
  const serviceType = {
    name: body.name,
    price: body.price
  };

  console.debug('### Create a ServiceType: ', serviceType);

  // Save ServiceType in the database
  ServiceTypes.create(serviceType)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the ServiceType.'
      });
    });
};

exports.findAll = (req, res) => {
  ServiceTypes.findAll({ include: ['services'] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving ServiceTypes.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  ServiceTypes.findByPk(id, { include: ['services'] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find ServiceType with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving ServiceType with id=' + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  ServiceTypes.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'ServiceType was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update ServiceType with id=${id}. Maybe ServiceType was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating ServiceType with id=' + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  ServiceTypes.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'ServiceType was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete ServiceType with id=${id}. Maybe ServiceType was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete ServiceType with id=' + id
      });
    });
};

exports.deleteByIds = (req, res) => {
  const ids = JSON.parse(req.query?.filter ?? '{}').id ?? [];
  ServiceTypes.destroy({
    where: { id: ids }
  })
    .then((num) => {
      if (num) {
        res.send({
          message: 'ServiceTypes was deleted successfully! ' + num
        });
      } else {
        res.send({
          message: `Cannot delete ServiceTypes with ids=${ids}. Maybe ServiceTypes was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message + 'Could not delete ServiceTypes with id=' + ids
      });
    });
};
