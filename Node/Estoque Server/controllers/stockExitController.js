const StockExit = require('../models/stockExit')
const Product = require('../models/product')
const StockEntry = require('../models/stockEntry')

const stockExitControllers = {
    HelloMessage: async (req, res) => {
        try {
            res.json({ message: 'Hello Stock Exits' })
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    CreateStockExit: async (req, res) => {
        try {
            const exitDataArray = req.body

            for (const exitData of exitDataArray) {
                const product = await Product.findByPk(exitData.id_product);

                if (!product) {
                    return res.status(404).send(`Product with id ${exitData.id_product} not found`);
                }

                const totalEntries = await StockEntry.sum('quantity', { where: { id_product: product.id_product } });
                const totalExits = await StockExit.sum('quantity', { where: { id_product: product.id_product } });
                const currentInventory = totalEntries - totalExits;

                if (exitData.quantity > currentInventory) {
                    return res.status(400).send(`Insufficient stock for product with id ${exitData.id_product}`);
                }

                await StockExit.create(exitData);
            }
            res.send("The Stock Exit Registered Successfully")
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    ShowAllExits: async (req, res) => {
        try {
            const exits = await StockExit.findAll()
            if (exits.length === 0) {
                res.json("No Stock Exits Registered")
            }
            res.json(exits)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    ShowOneExit: async (req, res) => {
        try {
            const exit = await StockExit.findByPk(req.params.id)
            if (!exit) {
                res.json("No Stock Exit Registered")
            }
            res.json(exit)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    UpdateStockExit: async (req, res) => {
        try {
            const exit = await StockExit.findByPk(req.params.id)
            if (!exit) {
                res.status(404).send("Stock Exit Not Found")
            }
            await exit.update(req.body)
            res.send("Stock Exit Updated Successfully")
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    DeleteStockExit: async (req, res) => {
        try {
            const exit = await StockExit.findByPk(req.params.id)
            if (!exit) {
                res.send("Stock Exit Not Found")
            }
            await exit.destroy()
            res.send("Stock Exit Deleted Successfully")
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = stockExitControllers