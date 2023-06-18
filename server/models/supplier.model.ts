import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const PurchaseInvoice = sequelize.define('supplier', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    }
  });

  return PurchaseInvoice;
};
