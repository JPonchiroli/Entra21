const express = require('express');
const router = express.Router();
const ProductControllers = require('../controllers/productController')

router.get('/HelloProducts', ProductControllers.HelloMessage) /*Debug Message*/ 

router.post('/Products', ProductControllers.CreateProduct)

router.get('/Products', ProductControllers.ShowAllProducts)

router.get('/Products/:id', ProductControllers.ShowOneProduct)

router.delete('/Products/:id', ProductControllers.DeleteProduct)

router.put('/Products/:id', ProductControllers.UpdateProduct)

module.exports = router;