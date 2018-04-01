const Sequelize = require('sequelize');
const db = require('../db');

const Driver = db.define('driver', {
  name: Sequelize.STRING,
  nationalId: Sequelize.STRING,
  driverLicenseId: Sequelize.STRING,
  plateNo: Sequelize.STRING

})

module.exports = Driver;