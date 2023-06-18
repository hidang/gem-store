import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const ServiceType = sequelize.define('service_type', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    // Đơn giá
    price: {
      type: DataTypes.DECIMAL
    }
  });

  return ServiceType;
};
