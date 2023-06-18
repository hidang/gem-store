import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const PurchaseInvoice = sequelize.define('purchase_invoice', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull: false
    }
    // nccId, staffId, productId -> PK
    // createAt - default  // NgayLap
  });

  return PurchaseInvoice;
};
