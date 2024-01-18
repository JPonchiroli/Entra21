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
            res.json(entries)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    ShowOneEntry: async (req, res) => {
        try{
            const entry = await StockEntry.findByPk(req.params.id)
            res.json(entry)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = stockEntryControllers