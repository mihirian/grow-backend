// panVerificationService.js
const axios = require('axios');
const { getHeaders } = require('../../common/paysprintHeaderUtils');
const PanVerification = require('../../models/panVerificationModel');

// Function to check if PAN verification information already exists in the database
const checkExistingVerification = async (panNumber) => {
  try {
    return await PanVerification.findOne({
      where: {
        pannumber: panNumber
      }
    });
  } catch (error) {
    console.error("Error checking existing verification:", error);
    throw error;
  }
};

// Function to make the API request to verify PAN number
const makeApiRequest = async (panNumber) => {
  try {
    const headers = getHeaders();
    const requestData = {
      pannumber: panNumber,
      refid: Math.floor(Math.random() * 1000000000)
    };
    
    // Make the axios request
    const response = await axios.post('https://uat.paysprint.in/sprintverify-uat/api/v1/verification/pan_verify', requestData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};

// Function to save PAN verification result to the database
const saveVerificationResult = async (requestData, responseData) => {
  try {
    // Create a new record in the database using the PanVerification model
    await PanVerification.create({
      request_id: requestData.refid,
      pannumber: requestData.pannumber,
      refid: responseData.reference_id,
      client_id: responseData.data.client_id,
      pan_number: responseData.data.pan_number,
      full_name: responseData.data.full_name,
      category: responseData.data.category,
      statuscode: responseData.statuscode,
      status: responseData.status,
      message: responseData.message,
      response: responseData,
    });
  } catch (error) {
    console.error("Error saving verification result:", error);
    throw error;
  }
};

// Function to verify PAN number
exports.verifyPanNumber = async (panNumber) => {
  try {
    // Check if PAN verification information already exists in the database
    const existingVerification = await checkExistingVerification(panNumber);

    if (existingVerification) {
      // If verification information exists, return the stored response
      console.log("Verification information already exists in the database.");
      return existingVerification.response;
    }

    // If verification information doesn't exist, proceed with API request
    const response = await makeApiRequest(panNumber);

    // Store the response in the database
    await saveVerificationResult({ pannumber: panNumber }, response);

    return response;
  } catch (error) {
    console.error("Error verifying PAN number:", error);
    throw error;
  }
};
