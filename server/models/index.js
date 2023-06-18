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
  foreignKey: 'purchaseInvoice_id'
});
db.Products.belongsTo(PurchaseInvoice, {
  foreignKey: 'purchaseInvoice_id'
});
// - Suppliers one - many Product
db.Suppliers.hasMany(Product, {
  foreignKey: 'supplier_id'
});
db.Products.belongsTo(Supplier, {
  foreignKey: 'supplier_id'
});
// - ProductType one - many Product
db.ProductTypes.hasMany(Product, {
  foreignKey: 'productType_id'
});
db.Products.belongsTo(ProductType, {
  foreignKey: 'productType_id'
});
// - Unit one - many ProductType
db.Units.hasMany(ProductType, {
  foreignKey: 'unit_id',
  as: 'productTypes'
});
db.ProductTypes.belongsTo(Unit, {
  foreignKey: 'unit_id'
});
// ServiceType one - many Service
db.ServiceTypes.hasMany(Service, {
  foreignKey: 'serviceType_id'
});
db.Services.belongsTo(ServiceType, {
  foreignKey: 'serviceType_id'
});
// ServiceInvoices one - many Service
db.ServiceInvoices.hasMany(Service, {
  foreignKey: 'serviceInvoice_id'
});
db.Services.belongsTo(ServiceInvoice, {
  foreignKey: 'serviceInvoice_id'
});
// - Customers one - many ServiceInvoice
db.Customers.hasMany(ServiceInvoice, {
  foreignKey: 'customer_id',
  as: 'serviceInvoices'
});
db.ServiceInvoices.belongsTo(Customer, {
  foreignKey: 'customer_id'
});

// 4. sync database
// create table if not exist
db.sequelize.sync();
// db.sequelize.sync({ alter: true });
// sequelize.sync({ force: true }).then(() => console.log('Drop and re-sync db.'));
module.exports = db;
