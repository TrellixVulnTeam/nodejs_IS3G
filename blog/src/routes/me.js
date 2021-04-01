const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/meController');

router.get('/stored/players', meController.storedPlayers);
router.get('/trash/players', meController.trashPlayers);


module.exports = router;
