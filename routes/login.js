const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUserLogin);
router.post('/teacher-index', userController.postUserLogin);

module.exports = router;