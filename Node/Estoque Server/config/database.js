const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('product_api', 'user', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize