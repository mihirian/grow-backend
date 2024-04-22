// src/controllers/panVerificationController.js
const panVerificationService = require('../../services/paysprint/panVerificationService');

exports.verifyPanNumber = async (req, res, next) => {
    try {
      const { panNumber } = req.body;
      console.log("helloe");

      const response = await panVerificationService.verifyPanNumber(panNumber);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };


  exports.pandetailsinfo = async (req, res, next) => {
    try {
      const { id_number } = req.body;
      console.log("helloe");
      const response = await panVerificationService.pandetailsinfo(id_number);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };
