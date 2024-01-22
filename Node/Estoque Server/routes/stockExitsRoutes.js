const express = require('express')
const router = express.Router()
const stockExit = require('../controllers/stockExitController')

router.get('/HelloStockExit', stockExit.HelloMessage) /*Debug Message */ 

router.get('/StockExit', stockExit.ShowAllExits)

router.get('/StockExit/:id', stockExit.ShowOneExit)

router.post('/StockExit', stockExit.CreateStockExit)

router.put('/StockExit/:id', stockExit.UpdateStockExit)

module.exports = router