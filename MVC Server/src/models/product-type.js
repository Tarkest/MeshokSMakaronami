const Sequelize = require("sequelize");
const sequelize = require("../../db-config");

const ProductType = sequelize.define("producttype", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type:Sequelize.STRING,
    allowNull:false
  }
}, {
  timestamps: false
});

module.exports = ProductType;
