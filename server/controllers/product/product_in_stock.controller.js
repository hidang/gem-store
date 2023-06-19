const db = require('../../models');
const Products = db.Products;
const ProductOnSales = db.ProductOnSales;
const Op = db.Sequelize.Op;

exports.findAll = async (req, res) => {
  const dataProducts = await Products.findAll().catch((err) => {
    console.log(err.message);
  });
  const dataProductOnSales = await ProductOnSales.findAll().catch((err) => {
    console.log(err.message);
  });

  let productOnStock = [];
  // handle product on stock
  for (const _product of dataProducts) {
    const productSaleds = dataProductOnSales.filter((x) => x.id.split('-')[1] == _product.id);

    if (productSaleds.length > 0) {
      let countInStock = _product.count;
      productSaleds.forEach((_productSaled) => {
        countInStock -= _productSaled.count;
      });
      if (countInStock > 0) {
        _product.count = countInStock;
        productOnStock.push(_product);
      }
    } else {
      productOnStock.push(product);
    }
  }

  res.send(productOnStock);
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  PurchaseInvoices.findByPk(id, { include: ['products'] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find PurchaseInvoice with id=${id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving PurchaseInvoice with id=' + id
      });
    });
};
