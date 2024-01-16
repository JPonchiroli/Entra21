const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/productController')

router.get('/', Controllers.HelloMessage)

router.post('/Products', Controllers.CreateProduct)

module.exports = router;