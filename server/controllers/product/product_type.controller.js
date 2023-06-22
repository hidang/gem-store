const db = require('../../models');
const ProductTypes = db.ProductTypes;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.name || !body.profitPercent || !body.unit_id) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a ProductType
  const productType = {
    name: body.name,
    profitPercent: body.profitPercent,
    unit_id: body.unit_id
  };

  console.debug('### Create ProductType: ', productType);

  // Save ProductType in the database
  ProductTypes.create(productType)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the ProductType.'
      });
    });
};

exports.findAll = (req, res) => {
  ProductTypes.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving ProductTypes.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  ProductTypes.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find ProductType with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving ProductType with id=' + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  ProductTypes.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'ProductType was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update ProductType with id=${id}. Maybe ProductType was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating ProductType with id=' + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  ProductTypes.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'ProductType was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete ProductType with id=${id}. Maybe ProductType was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete ProductType with id=' + id
      });
    });
};

exports.deleteByIds = (req, res) => {
  const ids = JSON.parse(req.query?.filter ?? '{}').id ?? [];
  ProductTypes.destroy({
    where: { id: ids }
  })
    .then((num) => {
      if (num) {
        res.send({
          message: 'ProductTypes was deleted successfully! ' + num
        });
      } else {
        res.send({
          message: `Cannot delete ProductTypes with ids=${ids}. Maybe ProductTypes was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message + 'Could not delete ProductTypes with id=' + ids
      });
    });
};
