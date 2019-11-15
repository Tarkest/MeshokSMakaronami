const Sequelize = require("sequelize");
const sequelize = require("../../db-config");
const ProductType = require("../models/product-type");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type:Sequelize.STRING,
    allowNull:false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

Product.belongsTo(ProductType);
ProductType.hasMany(Product);

module.exports = Product;
