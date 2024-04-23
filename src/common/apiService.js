const axios = require('axios');
const { getHeaders } = require('../common/paysprintHeaderUtils');
const { env } = require('process');

const API_BASE_URL = env.API_BASE_URL;

exports.makePostRequest = async (endpoint, data) => {
  const headers = getHeaders();
  const url = `${API_BASE_URL}/${endpoint}`;
  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    console.error(`Error making POST request to ${url}:`, error.message);
    throw error; // Make sure to throw a simple error or custom error object
  }
};

