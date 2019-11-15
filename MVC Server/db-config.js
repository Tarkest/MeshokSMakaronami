const sequelize = require("sequelize");

const dbConnection = new sequelize("mvc_edu_base", "root", "admin", {
  host: 'localhost',
  dialect: 'mysql',
});

// dbConnection.sync({ force: true });

module.exports = dbConnection;