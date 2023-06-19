import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const ProductInStock = sequelize.define('product_on_sale', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    // get in backend
    name: {
      type: DataTypes.STRING
    },
    pricePerProduct: {
      type: DataTypes.DECIMAL
    },
    massPerProduct: {
      type: DataTypes.DOUBLE
    },
    // extra info (nice to have)
    purchaseInvoice_id: {
      type: DataTypes.INTEGER
    },
    supplier_id: {
      type: DataTypes.INTEGER
    },

    // must have info (decor at product On Sales)
    productTypeName: {
      type: DataTypes.STRING
    },
    profitPercent: {
      type: DataTypes.DOUBLE
    },
    unitName: {
      type: DataTypes.STRING
    }
  });

  return ProductInStock;
};
