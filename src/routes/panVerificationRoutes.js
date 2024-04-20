const express = require('express');
const { verifyPanNumber } = require('../controllers/paysprint/panVerificatonController');
const { validatePanNumber } = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/verifyPanNumber', validatePanNumber, verifyPanNumber);

module.exports = router;