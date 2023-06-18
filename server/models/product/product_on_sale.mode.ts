import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const ProductInStock = sequelize.define('product_in_stock', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pricePerProduct: {
      type: DataTypes.DECIMAL
    },
    massPerProduct: {
      type: DataTypes.DOUBLE
    },
    // must have info (decor at product On Sales)
    productType: {
      type: DataTypes.STRING
    },
    profitPercent: {
      type: DataTypes.DOUBLE
    },

    // extra info (nice to have)
    purchaseInvoiceId: {
      type: DataTypes.INTEGER
    },
    supplierId: {
      type: DataTypes.UUID
    }
  });

  return ProductInStock;
};
