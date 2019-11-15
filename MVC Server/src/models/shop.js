const Sequelize = require("sequelize");
const sequelize = require("../../db-config");

const Shop = sequelize.define("Shop", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement:true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Shop;