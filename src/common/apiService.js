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
    console.error(`Error making POST request to ${url}:`, error);
    throw error;
  }
};
