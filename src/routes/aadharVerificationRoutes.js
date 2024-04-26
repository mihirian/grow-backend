const express = require("express");
const {validatePanNumber} = require("../middlewares/validateRequest");
const { validateWithAadharNumber
} = require("../controllers/paysprint/aadharVerificationController");

const router = express.Router();


router.post('/validatewithnumber',validateWithAadharNumber);



module.exports = router;