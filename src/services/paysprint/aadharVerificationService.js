const { makePostRequest } = require('../../common/apiService');


exports.validateWithAadharNumber = async (id_number) => {
    try {
        const requestData = {
            id_number: id_number,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/aadhaar_without_otp', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying PAN number:",error);
        throw error;
    }
}