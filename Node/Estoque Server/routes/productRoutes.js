const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/productController')

router.get('/', Controllers.HelloMessage)

module.exports = router;