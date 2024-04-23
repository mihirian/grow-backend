const { makePostRequest } = require('../../common/apiService');
const { findVerificationByPan, saveVerificationResult } = require('../../dao/panDatabaseService');

exports.verifyPanNumber = async (panNumber) => {
  try {
    const existingVerification = await findVerificationByPan(panNumber);
    if (existingVerification) {
      console.log("Verification information already exists in the database.");
      return existingVerification.response;
    }

    const requestData = {
      pannumber: panNumber,
      refid: Math.floor(Math.random() * 1000000000)
    };
    const responseData = await makePostRequest('verification/pan_verify', requestData);

    await saveVerificationResult({
      request_id: requestData.refid,
      pannumber: requestData.pannumber,
      refid: responseData.reference_id,
      client_id: responseData.data.client_id,
      full_name: responseData.data.full_name,
      category: responseData.data.category,
      statuscode: responseData.statuscode,
      status: responseData.status,
      message: responseData.message,
      response: responseData,
    });

    return responseData;
  } catch (error) {
    console.error("Error verifying PAN number:", error);
    throw error;
  }
};
