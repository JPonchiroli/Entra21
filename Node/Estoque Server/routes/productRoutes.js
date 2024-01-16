const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/productController')

router.get('/', Controllers.HelloMessage)

router.post('/Products', Controllers.CreateProduct)

router.get('/Products', Controllers.ShowAllProducts)

router.delete('/Products/:id', Controllers.DeleteProduct)

module.exports = router;