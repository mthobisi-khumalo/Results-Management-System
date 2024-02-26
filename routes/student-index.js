const express = require('express');
const router = express.Router();
const scoreController = require('../controllers/scoreController');

router.get('/', scoreController.getStudentIndex);
router.post('/findScore', scoreController.getOneScore);

module.exports = router;