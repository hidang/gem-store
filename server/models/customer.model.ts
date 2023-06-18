import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const Customer = sequelize.define('customer', {
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
    dob: {
      type: DataTypes.DATE // YYYY-MM-DD
    },
    address: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  });

  return Customer;
};
