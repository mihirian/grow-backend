const { makePostRequest } = require('../../common/apiService');

exports.drivinglicenseVerif = async (driving_licence,dob) => {
    try {
        const requestData = {
            driving_licence:driving_licence,
            dob:dob,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/driving_licence_v2', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying PAN number:",error);
        throw error;
    }
}


exports.voterIdVerification = async (id_number) => {
    try {
        const requestData = {
            id_number: id_number,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/voter_verify', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying PAN number:",error);
        throw error;
    }
}

exports.passportVerif = async (id_number,dob) => {
    try {
        const requestData = {
            id_number:id_number,
            dob:dob,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/passport_verify', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying PAN number:",error);
        throw error;
    }
}


exports.fssaiVerif = async (fssai_number) => {
    try {
        const requestData = {
            fssai_number:fssai_number,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/fssai_check', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying PAN number:",error);
        throw error;
    }
}