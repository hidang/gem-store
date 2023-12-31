const db = require('../../models');
const Product = db.Products;
const PurchaseInvoice = db.PurchaseInvoices;

const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = async (req, res) => {
  const body = req.body;

  // Validate request
  if (!body.name || !body.purchaseInvoice_id || !body.productType_id || !body.pricePerProduct) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  const purchaseInvoice = await PurchaseInvoice.findByPk(body.purchaseInvoice_id);

  // Create a Product
  const product = {
    name: body.name,
    count: body.count,
    pricePerProduct: body.pricePerProduct,
    purchaseInvoice_id: body.purchaseInvoice_id,
    supplier_id: purchaseInvoice?.supplier_id,
    productType_id: body.productType_id,
    massPerProduct: body.massPerProduct ?? 1
  };

  console.debug('### Create Product: ', product);

  // Save Product in the database
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Product.'
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving products.'
      });
    });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Product with id=' + id
      });
    });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Product was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Product with id=' + id
      });
    });
};

// Delete a Product with the specified id in the request
exports.delete = async (req, res) => {
  const ids = req.query?.filter ?? [];
  for (const _id of ids) {
    await Product.destroy({
      where: { id: _id }
    }).catch((err) => {
      res.status(500).send({
        message: 'Could not delete Product with id=' + id
      });
      return;
    });
  }
  res.send({
    message: 'Product was deleted successfully!'
  });
};

exports.deleteByIds = (req, res) => {
  const ids = JSON.parse(req.query?.filter ?? '{}').id ?? [];
  Product.destroy({
    where: { id: ids }
  })
    .then((num) => {
      if (num) {
        res.send({
          message: 'Products was deleted successfully! ' + num
        });
      } else {
        res.send({
          message: `Cannot delete Products with ids=${ids}. Maybe Products was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Products with id=' + ids
      });
    });
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false
  })
    .then((nums) => {
      res.send({ message: `${nums} Products were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Products.'
      });
    });
};

// find all published Product
exports.findAllPublished = (req, res) => {
  Product.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Products.'
      });
    });
};
