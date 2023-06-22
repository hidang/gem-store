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
        const _countBuy = _product.count;
        _product.dataValues.countBuy = _countBuy;
        _product.count = countInStock;
        _product.dataValues.countSale = _countBuy - countInStock;

        productOnStock.push(_product);
      }
    } else {
      _product.dataValues.countSale = 0;
      _product.dataValues.countBuy = _product.count;

      productOnStock.push(_product);
    }
  }
  console.debug('@@@@ get all >> productOnStock: ', productOnStock);

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

exports.deleteByIds = (req, res) => {
  const ids = JSON.parse(req.query?.filter ?? '{}').id ?? [];
  Products.destroy({
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
        message: 'Could not delete Products with id=' + ids + ' Products was using'
      });
    });
};
