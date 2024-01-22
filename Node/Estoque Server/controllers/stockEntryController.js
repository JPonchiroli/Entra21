const StockEntry = require('../models/stockEntry')

const stockEntryControllers = {
    HelloMessage: async (req, res) => {
        try{
            res.json({ message: 'Hello Stock Entrys' })
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    CreateStockEntry: async (req, res) => {
        try{
            const { id_product, quantity, entry_date } = req.body

            const entryDate = new Date(entry_date)

            const newStockEntry = await StockEntry.create({
                id_product, quantity, entry_date: entryDate
            })

            res.json(newStockEntry)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    ShowAllEntries: async (req, res) => {
        try{
            const entries = await StockEntry.findAll()
            if(entries === 0) {
                res.json("No Stock Entries Registered")
            }
            res.json(entries)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    ShowOneEntry: async (req, res) => {
        try{
            const entry = await StockEntry.findByPk(req.params.id)
            if(!entry) {
                res.json("No Stock Entry Registered")
            }
            res.json(entry)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    DeleteStockEntry: async (req, res) => {
        try {
            const entry = await StockEntry.findByPk(req.params.id)
            if(!entry) {
                res.status(404).send("Stock Entry Not Find")
            }
            await entry.destroy()
            res.send("Entry Successfully Deleted")
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    UpdateStockEntry: async (req, res) => {
        try {
            const entry = await StockEntry.findByPk(req.params.id)
            if(!entry){
                res.status(404).send("Stock Entry Not Find")
            }
            await entry.update(req.body)
            res.send("Stock Entry Successfully Updated")
        } catch (error) {
            res.send(500).send(error.message)
        }
    }
}

module.exports = stockEntryControllers