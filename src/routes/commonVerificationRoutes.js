const express = require("express");
const {validatePanNumber} = require("../middlewares/validateRequest");
const { drivinglicenseVerif,
    voterIdVerification,
    passportVerif,
    fssaiVerif
} = require("../controllers/paysprint/commonVerificatonController");

const router = express.Router();


router.post('/drivinglicenseVerif',drivinglicenseVerif);
router.post('/voterIdVerif',voterIdVerification);
router.post('/passportVerif',passportVerif);
router.post('/fssaiVerif',fssaiVerif);





module.exports = router;