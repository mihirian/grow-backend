const PanVerification = require('../models/panVerificationModel');

exports.findVerificationByPan = async (panNumber) => {
  try {
    return await PanVerification.findOne({ where: { pannumber: panNumber } });
  } catch (error) {
    console.error("Error fetching verification from database:", error);
    throw error;
  }
};

exports.saveVerificationResult = async (data) => {
  try {
    await PanVerification.create(data);
  } catch (error) {
    console.error("Error saving verification result to database:", error);
    throw error;
  }
};
