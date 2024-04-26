const express = require("express");
const {validatePanNumber} = require("../middlewares/validateRequest");
const { drivinglicenseVerif,
    voterIdVerification,
    passportVerif,
    fssaiVerif,
    iec_verify,
    mca_verify,
    gst_verify,
    tan_verify,
    lei_verify,
    getStateList,
    shop_establishment,
    rc_verify,
    bankaccount_verify,
    email_checker

} = require("../controllers/paysprint/commonVerificatonController");

const router = express.Router();


router.post('/drivinglicenseVerif',drivinglicenseVerif);
router.post('/voterIdVerif',voterIdVerification);
router.post('/passportVerif',passportVerif);
router.post('/fssaiVerif',fssaiVerif);
router.post('/mca_verify',mca_verify);
router.post('/gst_verify',gst_verify);
router.post('/tan_verify',tan_verify);
router.post('/iec_verify',iec_verify);
router.post('/lei_verify',lei_verify);
router.post('/getStateList',getStateList);
router.post('/shop_establishment',shop_establishment);
router.post('/rc_verify',rc_verify);
router.post('/bankaccount_verify',bankaccount_verify);
router.post('/email_checker',email_checker);







module.exports = router;