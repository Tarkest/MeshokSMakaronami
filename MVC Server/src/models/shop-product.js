const Sequelize = require("sequelize");
const sequelize = require("../../db-config");
const Shop = require("./shop");
const Product = require("./product");

const ShopProduct = sequelize.define("shopproducts", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
});

Shop.belongsToMany(Product, { through: ShopProduct });
Product.belongsToMany(Shop, { through: ShopProduct });

module.exports = ShopProduct;
