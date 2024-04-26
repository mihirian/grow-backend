
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

exports.iec_verify= async (iec_number)=> {
    try {
        const requestData = {
            iec_number:iec_number,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/iec_verify', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying ied number:",error);
        throw error;
    }

}
exports.mca_verify= async (id_number)=> {
    try {
        const requestData = {
            id_number:id_number,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/mca_verify', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying mca number:",error);
        throw error;
    }
}


exports.email_checker=async (email)=> {
    try {
        const requestData = {
            email:email,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/email_checker', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying email :",error);
        throw error;
    }
}

exports.bankaccount_verify=async (account_number, ifsc_code) => {
    try {
        const requestData = {
            account_number:account_number,
            ifsc_code:ifsc_code,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/penny_drop_v2', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying bank acount :",error);
        throw error;
    }
}

exports.rc_verify= async (id_number) => {
    try {
        const requestData = {
            id_number:id_number,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/rc_verify', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying mca number:",error);
        throw error;
    }
}

exports.shop_establishment= async (state_code, shop_number) => {
    try {
        const requestData = {
            state_code:state_code,
            shop_number:shop_number,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/shop_establishment', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying shop_establishment number:",error);
        throw error;
    }
}

exports.getStateList=async () => {
    try {
        const requestData = {

        };
        const responseData = await makePostRequest('verification/getStateList', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying shop_establishment number:",error);
        throw error;
    }
}

exports.lei_verify=async (id_number) => {
    try {
        const requestData = {
            id_number:id_number,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/lei_verify', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying mca number:",error);
        throw error;
    }
}

exports.tan_verify=async (id_number) => {
    try {
        const requestData = {
            id_number:id_number,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/tan_verify', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying mca number:",error);
        throw error;
    }
}

exports.gst_verify=async (id_number, filing_status) => {
    try {
        const requestData = {
            id_number:id_number,
            filing_status:filing_status,
            refid: Math.floor(Math.random() * 1000000000)
        };
        const responseData = await makePostRequest('verification/gst_verify', requestData);
        return responseData;
    }catch (error){
        console.log("Error verifying mca number:",error);
        throw error;
    }
}

