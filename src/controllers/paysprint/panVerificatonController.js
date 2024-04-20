// src/controllers/panVerificationController.js
const panVerificationService = require('../../services/paysprint/panVerificationService');

exports.verifyPanNumber = async (req, res, next) => {
    try {
      const { panNumber } = req.body;
      const response = await panVerificationService.verifyPanNumber(panNumber);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };