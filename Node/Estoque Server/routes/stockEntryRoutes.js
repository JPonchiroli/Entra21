const express = require ('express')
const router = express.Router()
const stockEntry = require('../controllers/stockEntryController')

router.get('/HelloStockEntry', stockEntry.HelloMessage) /*Debug Message */ 

router.get('/StockEntry', stockEntry.ShowAllEntries)

router.get('/StockEntry/:id', stockEntry.ShowOneEntry)

router.post('/StockEntry', stockEntry.CreateStockEntry)

router.delete('/StockEntry/:id', stockEntry.DeleteStockEntry)

router.put('/StockEntry/:id', stockEntry.UpdateStockEntry)

module.exports = router