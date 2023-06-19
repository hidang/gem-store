const db = require('../../models');
const Products = db.Products;
const ProductOnSales = db.ProductOnSales;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  // TODO:
  Products.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving PurchaseInvoices.'
      });
    });
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
