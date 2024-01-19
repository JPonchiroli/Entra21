const StockExit = require('../models/stockExit')
const Product = require('../models/product')
const StockEntry = require('../models/stockEntry')

const stockExitControllers = {
    HelloMessage: async (req, res) => {
        try {
            res.json({ message: 'Hello Stock Exits'})
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    CreateStockExit: async (req, res) => {
        try {
            const { id_product, quantity} = req.body
            const product = await Product.findByPk(id_product)

            if(!product) {
                return res.status(404).send("Product Not Find")
            }

            const totalEntries = await StockEntry.sum('quantity', { where: { id_product } })
            const totalExits = await StockExit.sum('quantity', { where: { id_product }})
            const currentInventory = totalEntries - totalExits

            if(quantity > currentInventory){
                return res.status(400).send("The Stock is Insufficient")
            }
            await StockExit.create({ id_product, quantity, exit_date: new Date() })
            res.send("The Stock Exit Registered Successfully")
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    ShowAllExits: async (req, res) => {
        try{
            const exits = await StockExit.findAll()
            res.json(exits)
        } catch (error){
            res.status(500).send(error.message)
        }
    }
}

module.exports = stockExitControllers