const express = require('express');
const { verifyPanNumber } = require('../controllers/paysprint/panVerificatonController');
const { validatePanNumber } = require('../middlewares/validateRequest');
const { pandetailsinfo } = require('../controllers/paysprint/panVerificatonController');


const router = express.Router();

router.post('/verifyPanNumber', validatePanNumber, verifyPanNumber);

router.post('/pandetails_verify',pandetailsinfo);


module.exports = router;