const express = require('express');
const stateController = require('../controllers/stateController');
const cityController = require('../controllers/cityController');
const casesController = require('../controllers/casesController');

const router = express.Router();

router.get('/state', stateController);
router.get('/city/:state', cityController);
router.get('/cases', casesController);

module.exports = router;