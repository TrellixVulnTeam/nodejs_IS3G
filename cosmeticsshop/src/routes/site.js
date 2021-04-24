const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/siteController');

router.get('/', SiteController.home);
router.get('/aboutus', SiteController.aboutus);
router.get('/support', SiteController.support);

module.exports = router;