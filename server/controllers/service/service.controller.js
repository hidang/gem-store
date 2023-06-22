const db = require('../../models');
const Services = db.Services;
const Op = db.Sequelize.Op;

// Create and Save a new Service
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.name || !body.deliveryDate || !body.serviceType_id || !body.count || !body.serviceInvoice_id) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Service
  const service = {
    name: body.name,
    serviceInvoice_id: body.serviceInvoice_id,
    serviceType_id: body.serviceType_id,
    extraPrice: body.extraPrice ?? 0,
    prepay: body.prepay ?? 0,
    count: body.count,
    deliveryDate: body.deliveryDate,
    status: body.status ?? false
  };

  console.debug('### Create a Service: ', service);

  // Save Service in the database
  Services.create(service)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Service.'
      });
    });
};

exports.findAll = (req, res) => {
  Services.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Services.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Services.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Service with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Service with id=' + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Services.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Service was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Service with id=${id}. Maybe Service was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Service with id=' + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Services.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Service was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Service with id=${id}. Maybe Service was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Service with id=' + id
      });
    });
};

exports.deleteByIds = (req, res) => {
  const ids = JSON.parse(req.query?.filter ?? '{}').id ?? [];
  Services.destroy({
    where: { id: ids }
  })
    .then((num) => {
      if (num) {
        res.send({
          message: 'Services was deleted successfully! ' + num
        });
      } else {
        res.send({
          message: `Cannot delete Services with ids=${ids}. Maybe Services was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message + 'Could not delete Services with id=' + ids
      });
    });
};
