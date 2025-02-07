const express = require('express');
const { getBlockDetails } = require('../controllers/blockController');

const router = express.Router();

router.get('/block/:hash', getBlockDetails);

module.exports = router;