const express = require('express')
const router = express.Router()
const stockExit = require('../controllers/stockExitController')

router.get('/HelloStockExit', stockExit.HelloMessage) /*Debug Message */ 

router.get('/StockExit', stockExit.ShowAllExits)

router.post('/StockExit', stockExit.CreateStockExit)

module.exports = router