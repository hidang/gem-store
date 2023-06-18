const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');

// 0. connect to mysql server
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  retry: {
    match: [Sequelize.ConnectionError, Sequelize.ConnectionTimedOutError, Sequelize.TimeoutError, /Deadlock/i, 'SQLITE_BUSY'],
    max: 3
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 1. init table
const Product = require('./product/product.model.ts')(sequelize);
const PurchaseInvoice = require('./product/purchase_invoice.model.ts')(sequelize);
const Supplier = require('./supplier.model.ts')(sequelize);
const ProductType = require('./product/product_type.model.ts')(sequelize);
const Unit = require('./product/unit.model.ts')(sequelize);
const Service = require('./service/service.model.ts')(sequelize);
const ServiceType = require('./service/service_type.model.ts')(sequelize);
const Customer = require('./customer.model.ts')(sequelize);
const ServiceInvoice = require('./service/service_invoice.model.ts')(sequelize);

// 2. set table (__s)
db.Products = Product;
db.PurchaseInvoices = PurchaseInvoice;
db.Suppliers = Supplier;
db.ProductTypes = ProductType;
db.Units = Unit;
db.Services = Service;
db.ServiceTypes = ServiceType;
db.Customers = Customer;
db.ServiceInvoices = ServiceInvoice;

// 3. set associate
// - PurchaseInvoice one - many Product
db.PurchaseInvoices.hasMany(Product, {
  foreignKey: 'purchaseInvoiceId'
});
db.Products.belongsTo(PurchaseInvoice);
// - Suppliers one - many Product
db.Suppliers.hasMany(Product, {
  foreignKey: 'supplierId'
});
db.Products.belongsTo(Supplier);
// - ProductType one - many Product
db.ProductTypes.hasMany(Product, {
  foreignKey: 'productTypeId'
});
db.Products.belongsTo(ProductType);
// - Unit one - many ProductType
db.Units.hasMany(ProductType, {
  foreignKey: 'unitId',
  as: 'productTypes'
});
db.ProductTypes.belongsTo(Unit);
// ServiceType one - many Service
db.ServiceTypes.hasMany(Service, {
  foreignKey: 'serviceTypeId'
});
db.Services.belongsTo(ServiceType);
// ServiceInvoices one - many Service
db.ServiceInvoices.hasMany(Service, {
  foreignKey: 'serviceInvoiceId'
});
db.Services.belongsTo(ServiceInvoice);
// - Customers one - many ServiceInvoice
db.Customers.hasMany(ServiceInvoice, {
  foreignKey: 'customerId',
  as: 'serviceInvoices'
});
db.ServiceInvoices.belongsTo(Customer);

// 4. sync database
// create table if not exist
db.sequelize.sync();
// db.sequelize.sync({ alter: true });
// sequelize.sync({ force: true }).then(() => console.log('Drop and re-sync db.'));
module.exports = db;
