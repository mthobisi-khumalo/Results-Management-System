const express = require('express');
const router = express.Router();
const scoreController = require('../controllers/scoreController');

router.get('/addScore', scoreController.getAddScore);
router.post('/addScore', scoreController.postAddScore);
router.get('/', scoreController.getAllScores);
router.get('/updateScore', scoreController.getUpdateScore);
router.post('/updateScore', scoreController.postUpdateScore);
router.get('/deleteScore/:id', scoreController.deleteScore);

module.exports = router;