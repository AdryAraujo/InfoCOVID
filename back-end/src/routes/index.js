const express = require('express');
const stateController = require('../controllers/stateController');
const cityController = require('../controllers/cityController');

const router = express.Router();

router.get('/state', stateController);
router.get('/city/:state', cityController);

module.exports = router;