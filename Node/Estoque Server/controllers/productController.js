const Product = require('../models/product')

const Controllers = {
    HelloMessage: async (req, res) => {
        try{
            res.json({message: 'Hello World'})
        } catch (error){
            res.status(500).send(error.message)
        }
    },
    CreateProduct: async (req, res) => {
        try{
            const newProduct = await Product.create(req.body);
            res.json(newProduct)
        } catch (error){
            res.status(500).send(error.message)
        }
    }
}

module.exports = Controllers