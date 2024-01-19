const StockExit = require('../models/stockExit')

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
            
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = stockExitControllers