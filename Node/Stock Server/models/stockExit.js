const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class StockExit extends Model {}

StockExit.init({
    id_exit: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_product: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'id_product'
        }
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    exit_date: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'stock_exit',
    timestamps: false
});

module.exports = StockExit