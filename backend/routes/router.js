const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.get('/url/:urlId', urlController.getShortURL);
router.post('/url', urlController.createShortURL);

module.exports = router;