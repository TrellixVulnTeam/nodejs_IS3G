const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/productController');

router.get('/', productController.defaultActive);
router.get('/:brand', productController.getBrand);
router.get('/cart/watch', productController.cart);
router.get('/:code/detail', productController.detail);
router.get('/:code/addToCart', productController.addToCart);


module.exports = router;