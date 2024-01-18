const express = require ('express')
const router = express.Router()
const stockEntry = require('../controllers/stockEntryController')

router.get('/HelloStockEntry', stockEntry.HelloMessage) /*Debug Message*/ 

router.post('/StockEntry', stockEntry.CreateStockEntry)

module.exports = router