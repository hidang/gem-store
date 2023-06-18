import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const Product = sequelize.define('product', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER
    },
    pricePerProduct: {
      type: DataTypes.DECIMAL
    },
    massPerProduct: {
      type: DataTypes.DOUBLE
    }
  });

  return Product;
};
