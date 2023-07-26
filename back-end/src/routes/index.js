const express = require('express');
const stateController = require('../controllers/stateController');
const cityController = require('../controllers/cityController');
const casesController = require('../controllers/casesController');
const usersController = require('../controllers/usersController');
const accessController = require('../controllers/accessController');

const router = express.Router();

router.get('/state', stateController);
router.get('/city/:state', cityController);
router.get('/cases', casesController);
router.post('/auth/signin', usersController.signin);
router.post('/auth/signup', usersController.signup);
router.get('/access', accessController);

module.exports = router;