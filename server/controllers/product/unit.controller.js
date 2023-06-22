const db = require('../../models');
const Units = db.Units;
const Op = db.Sequelize.Op;

// Create and Save a new Unit
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.name) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a unit
  const unit = {
    name: body.name
  };

  console.debug('### Create unit: ', unit);

  // Save unit in the database
  Units.create(unit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Unit.'
      });
    });
};

exports.findAll = (req, res) => {
  Units.findAll({ include: ['productTypes'] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Units.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Units.findByPk(id, { include: ['productTypes'] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Unit with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Unit with id=' + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Units.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Unit was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Unit with id=${id}. Maybe Unit was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Unit with id=' + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Units.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Unit was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Unit with id=${id}. Maybe Unit was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Unit with id=' + id
      });
    });
};

exports.deleteByIds = (req, res) => {
  const ids = JSON.parse(req.query?.filter ?? '{}').id ?? [];
  Units.destroy({
    where: { id: ids }
  })
    .then((num) => {
      if (num) {
        res.send({
          message: 'Units was deleted successfully! ' + num
        });
      } else {
        res.send({
          message: `Cannot delete Units with ids=${ids}. Maybe Units was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message + 'Could not delete Units with id=' + ids
      });
    });
};
