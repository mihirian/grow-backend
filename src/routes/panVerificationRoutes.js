const express = require('express');
const { verifyPanNumber } = require('../controllers/paysprint/panVerificatonController');
const { validatePanNumber } = require('../middlewares/validateRequest');
const { pandetailsinfo,pandetailscomprehensive } = require('../controllers/paysprint/panVerificatonController');


const router = express.Router();

router.post('/verifyPanNumber', validatePanNumber, verifyPanNumber);

router.post('/pandetails_verify',pandetailsinfo);
router.post('/comprehensive',pandetailscomprehensive);



module.exports = router;