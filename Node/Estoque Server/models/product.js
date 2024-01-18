const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Product extends Model {}

Product.init({
    id_product: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING
    },
    size: {
        type: DataTypes.STRING
    },
    unitary_price: {
        type: DataTypes.DECIMAL(10, 2)
    }
}, {
    sequelize,
    modelName: 'product',
    timestamps: false
})

module.exports = Product;