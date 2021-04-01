const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/siteController');

router.get('/', SiteController.home);

module.exports = router;