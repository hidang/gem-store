import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const ProductType = sequelize.define('product_type', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    profitPercent: {
      type: DataTypes.DOUBLE
    }
  });

  return ProductType;
};
