const express = require('express');
const router = express.Router();

const playerController = require('../app/controllers/playerController');

router.get('/create', playerController.create);
router.post('/handle-form-actions', playerController.handleFormAction);
router.post('/store', playerController.store);
router.get('/:id/edit', playerController.edit);
router.put('/:id', playerController.update);
router.patch('/:id/restore', playerController.restore);
router.delete('/:id/force', playerController.forceDelete);
router.delete('/:id', playerController.delete);
router.get('/:slug', playerController.show);

module.exports = router;


// middleware : xác thực ,authorization, login, chia sẻ, các giá trị của biến.