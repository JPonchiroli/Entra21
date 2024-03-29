const Product = require('../models/product')

const ProductControllers = {
    HelloMessage: async (req, res) => {
        try {
            res.json({ message: 'Hello Products' })
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    CreateProduct: async (req, res) => {
        try {
            const productData = req.body

            Product.bulkCreate(productData)
            res.json("Products Successfully Added")
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    ShowAllProducts: async (req, res) => {
        try {
            const products = await Product.findAll()
            if(products.length === 0) {
                res.json("No Products Registered")
            }
            res.json(products)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    ShowOneProduct: async (req, res) => {
        try{
            const product = await Product.findByPk(req.params.id)
            if(!product) {
                res.json("No Product Registered")
            }
            res.json(product)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    DeleteProduct: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id)
            if(!product){
                return res.status(404).send("Product Not Find")
            }
            await product.destroy()
            res.send("Product Successfully Deleted")
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    UpdateProduct: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id)
            if(!product){
                return res.status(404).send("Product Not Find")
            }
            await product.update(req.body)
            res.send("Product Successfully Updated")
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = ProductControllers