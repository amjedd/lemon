const Sequelize = require('sequelize');

const db = new Sequelize('test', 'root', '1234', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

module.exports = db;

const Driver = require('./models/Driver');
