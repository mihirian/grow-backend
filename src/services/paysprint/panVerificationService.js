// panVerificationService.js
const axios = require('axios');
const { getHeaders } = require('../../common/paysprintHeaderUtils');

exports.verifyPanNumber = async (panNumber) => {
  try {
    const headers = getHeaders();
    const requestData = {
      pannumber: panNumber,
      referenceid: 12321
    };

    // Logging API details before hitting it
    console.log("API URL:", 'https://sit.paysprint.in/service-api/api/v1/service/pan/verify');
    console.log("Request Data:", requestData);
    console.log("Headers:", headers);

    // Now, make the axios request
    const response = await axios.post('https://sit.paysprint.in/service-api/api/v1/service/pan/verify', requestData, { headers });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      // Log the error message
      console.error("Error:", error.response.data);
      // Return the full error response
      return error.response.data;
    } else {
      // Log the original error
      console.error("Error:", error);
      // Throw the original error
      throw error;
    }
  }
};