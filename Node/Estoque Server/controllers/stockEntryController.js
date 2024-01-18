const StockEntry = require('../models/stockEntry')

const stockEntryControllers = {
    HelloMessage: async (req, res) => {
        try{
            res.json({ message: 'Hello Stock Entrys' })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = stockEntryControllers