import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const Service = sequelize.define('service', {
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
    // Phí thêm -> (Đơn giá được tính = [price of ServiceType] + [extraPrice])
    extraPrice: {
      type: DataTypes.DECIMAL
    },
    // Trả trước
    prepay: {
      type: DataTypes.DECIMAL
    },
    // Số lượng
    count: {
      type: DataTypes.INTEGER
    },
    // Ngày giao
    deliveryDate: {
      type: DataTypes.DATE
    },
    // Tình trạng (true -> Đã giao)
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Service;
};
