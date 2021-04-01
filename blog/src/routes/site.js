const express = require('express');
const router = express.Router();

const NewsController = require('../app/controllers/newsController');
const SiteController = require('../app/controllers/siteCOntroller');

router.get('/search', SiteController.search);

router.get('/', SiteController.home);

module.exports = router;
