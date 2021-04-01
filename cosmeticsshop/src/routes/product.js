const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/productController');

router.get('/', SiteController.defaultActive);
router.get('/:code/detail', SiteController.detail);



module.exports = router;