const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')
 
class StockEntry extends Model {}

StockEntry.init({
    id_entry: {
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
    entry_date: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'stock_entry',
    timestamps: false
});

module.exports = StockEntry;