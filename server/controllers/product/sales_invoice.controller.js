const db = require('../../models');
const SalesInvoices = db.SalesInvoices;
const ProductOnSales = db.ProductOnSales;
const ProductTypes = db.ProductTypes;
const Products = db.Products;
const Units = db.Units;

const Op = db.Sequelize.Op;

async function createProductOnSales(idSaleInvoice, idd, countt) {
  const dataProduct = await Products.findByPk(idd).catch((err) => {
    console.log('Lỗi xảy ra product_id=' + idd + ' ' + err.message);
    return;
  });
  console.log('@@XX product: ', dataProduct);

  if (dataProduct) {
    console.log('@@XX product: ', dataProduct);
    const productType = await ProductTypes.findByPk(dataProduct.productType_id).catch((err) => {
      console.log(`Error retrieving ProductType with id=' + dataProduct.productType_id.`);
      return;
    });
    if (productType) {
    } else {
      console.log(`Cannot find ProductType with id=${dataProduct.productType_id}.`);
    }
    const unit = await Units.findByPk(productType.unit_id).catch((err) => {
      console.log(`Error retrieving Unit with id=${productType.unit_id}.`);
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
    await ProductOnSales.create(productOnSale).catch((err) => {
      console.log(err.message || 'Some error occurred while creating the Product.');
    });
  } else {
    console.log(`Cannot find ProductType with id=${dataProduct.productType_id}.`);
  }
}
// Create and Save a new SalesInvoice
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!body.customer_id) {
    res.status(400).send({
      message: 'Content customer_id can not be empty!'
    });
    return;
  }

  // Create a SalesInvoice
  const salesInvoice = {
    customer_id: body.customer_id,
    createdAt: body.createdAt ?? new Date().toISOString()
  };

  console.debug('###', salesInvoice);

  // Save SalesInvoice in the database
  SalesInvoices.create(salesInvoice)
    .then(async (salesInvoice) => {
      // create products on sale
      if (body.products != null) {
        for (const product of body.products) {
          await createProductOnSales(salesInvoice.id, product.id, product.count);
        }
      }

      const result = await SalesInvoices.findByPk(salesInvoice.id, { include: ['productOnSales'] });

      res.send(result);
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

exports.deleteByIds = (req, res) => {
  const ids = JSON.parse(req.query?.filter ?? '{}').id ?? [];
  SalesInvoices.destroy({
    where: { id: ids }
  })
    .then((num) => {
      if (num) {
        res.send({
          message: 'SalesInvoices was deleted successfully! ' + num
        });
      } else {
        res.send({
          message: `Cannot delete SalesInvoices with ids=${ids}. Maybe SalesInvoices was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete SalesInvoices with id=' + ids
      });
    });
};
