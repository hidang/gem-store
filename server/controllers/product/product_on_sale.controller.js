const db = require('../../models');
const ProductOnSales = db.ProductOnSales;
const ProductTypes = db.ProductTypes;
const Products = db.Products;
const Units = db.Units;
const Op = db.Sequelize.Op;

// Create and Save a new ProductOnSave
exports.create = async (req, res) => {
  const body = req.body;

  // Validate request
  if (!body.id || !body.count || !body.salesInvoice_id) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  const idSaleInvoice = body.salesInvoice_id;
  const idd = body.id;
  const countt = body.count;

  const dataProduct = await Products.findByPk(idd).catch((err) => {
    console.log('Lỗi xảy ra product_id=' + idd + ' ' + err.message);
    return;
  });
  console.log('@@XX product: ', dataProduct);

  if (dataProduct) {
    console.log('@@XX product: ', dataProduct);
    const productType = await ProductTypes.findByPk(dataProduct.productType_id).catch((err) => {
      console.log(`Error retrieving ProductType with id=' + dataProduct.productType_id.`);
      res.status(500).send({
        message: `Error retrieving ProductType with id=' + dataProduct.productType_id.`
      });
      return;
    });
    if (productType) {
    } else {
      console.log(`Cannot find ProductType with id=${dataProduct.productType_id}.`);
    }
    const unit = await Units.findByPk(productType.unit_id).catch((err) => {
      console.log(`Error retrieving Unit with id=${productType.unit_id}.`);
      res.status(500).send({
        message: `Error retrieving Unit with id=${productType.unit_id}.`
      });
      return;
    });

    // Create a ProductOnSale
    const productOnSale = {
      salesInvoice_id: idSaleInvoice,
      id: `${idSaleInvoice}-${idd}`,
      count: countt,
      // must have info on create
      productTypeName: productType.name,
      profitPercent: productType.profitPercent,
      unitName: unit.name,

      // TODO: check count maximum
      // fetch in there
      name: dataProduct.name,
      pricePerProduct: dataProduct.pricePerProduct,
      massPerProduct: dataProduct.massPerProduct,
      supplier_id: dataProduct.supplier_id,
      purchaseInvoice_id: dataProduct.purchaseInvoice_id
    };

    console.debug('### Create ProductOnSale: ', productOnSale);

    // Save Product in the database
    const product = await ProductOnSales.create(productOnSale).catch((err) => {
      console.log(err.message + 'Some error occurred while creating the Product.');
      res.status(500).send({
        message: err.message + 'Some error occurred while creating the Product.'
      });
    });
    res.send(product);
  } else {
    console.log(`Cannot find ProductType with id=${dataProduct.productType_id}.`);
    res.status(500).send({
      message: `Cannot find ProductType with id=${dataProduct.productType_id}.`
    });
  }
};

// Retrieve all ProductOnSales from the database.
exports.findAll = (req, res) => {
  ProductOnSales.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving products.'
      });
    });
};

// Find a single ProductOnSale with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProductOnSales.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find ProductOnSale with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving ProductOnSale with id=' + id
      });
    });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  ProductOnSales.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'ProductOnSale was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update ProductOnSale with id=${id}. Maybe ProductOnSale was not found or req.body is empty!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating ProductOnSale with id=' + id
      });
    });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ProductOnSales.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'ProductOnSale was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete ProductOnSale with id=${id}. Maybe ProductOnSale was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete ProductOnSale with id=' + id
      });
    });
};
