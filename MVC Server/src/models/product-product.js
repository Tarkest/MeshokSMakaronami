const Sequelize = require("sequelize");
const sequelize = require("../../db-config");
const Product = require("./product");

const ProductProduct = sequelize.define("productsproducts", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  }
}, {
  timestamps: false,
});

Product.belongsToMany(Product, { through: ProductProduct, as: "product1", foreignKey: "product1Id" });
Product.belongsToMany(Product, { through: ProductProduct, as: "product2", foreignKey: "product2Id" });

module.exports = ProductProduct;
