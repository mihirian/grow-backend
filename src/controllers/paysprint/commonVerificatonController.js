const commonVerificationService = require("../../services/paysprint/commonVerificationService");
const aadharVerificationService = require("../../services/paysprint/aadharVerificationService");


exports.drivinglicenseVerif = async (req,res,next)=>{
    try{
        const {driving_licence,dob} =req.body;
        const response = await commonVerificationService.drivinglicenseVerif(driving_licence,dob);
        res.json(response);
        // {
        //     "statuscode":200,
        //     "status":true,
        //     "message":"Extracted driving license details",
        //     "reference_id":20283131,
        //     "data":{
        //     "document_type":"DRIVING_LICENSE",
        //         "document_id":"UP1620210024803",
        //         "name":"Dummy Name ",
        //         "date_of_birth":"2024-01-11",
        //         "dependent_name":"Dummy Name SINGH CHAUHAN",
        //         "address":"UP",
        //         "pincode":"111111",
        //         "validity":{
        //         "non_transport":{
        //             "issue_date":"2024-01-01",
        //                 "expiry_date":"2050-01-01"
        //         }
        //     },
        //     "rto_details":{
        //         "state":"Uttar Pradesh",
        //             "authority":"ASST.RTO, Noida"
        //     },
        //     "vehicle_class_details":[
        //         {
        //             "category":"LMV",
        //             "authority":"ASST.RTO, Noida"
        //         },
        //         {
        //             "category":"MCWG",
        //             "authority":"ASST.RTO, Noida"
        //         }
        //     ],
        //         "photo_base64":""
        // }
        // }
    }
    catch (error){
        next(error);
    }
};





exports.voterIdVerification = async (req,res,next)=>{
    try{
        const {id_number} =req.body;
        const response = await commonVerificationService.voterIdVerification(id_number);
        res.json(response);
        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success",
        //     "reference_id": 20283137,
        //     "data": {
        //     "client_id": "voter_928541dd143878a6",
        //         "epic_no": "UP1620210024803",
        //         "gender": "M",
        //         "state": "NCT OF Delhi",
        //         "name": "Dummy Name",
        //         "relation_name": "Dummy Name",
        //         "relation_type": "F",
        //         "house_no": null,
        //         "dob": null,
        //         "age": "26",
        //         "area": "SHIV MANDIR BLOCK TIRTHANKAR NAGAR",
        //         "district": "NORTH WEST",
        //         "additional_check": [],
        //         "multiple": false,
        //         "last_update": "2023-01-04",
        //         "assembly_constituency": "XXXXXXXXXXXXXXXXX",
        //         "assembly_constituency_number": "8",
        //         "polling_station": "XXXXXXXXXXXXXXXXXXXXXXXX",
        //         "part_number": "53",
        //         "part_name": "SHIV MANDIR BLOCK TIRTHANKAR NAGAR",
        //         "slno_inpart": "754",
        //         "ps_lat_long": "0.0,0.0",
        //         "rln_name_v1": "XXXXXXXXXXXXXXXXXXXXXXXX",
        //         "rln_name_v2": "",
        //         "rln_name_v3": "",
        //         "section_no": "2",
        //         "name_v1": "XXXXXXXXXXXXXXXXXXXX",
        //         "name_v2": "",
        //         "name_v3": "",
        //         "st_code": "U05",
        //         "parliamentary_constituency": "NORTH WEST DELHI",
        //         "id": "U050080053020754"
        // }
        // }
    }
    catch (error){
        next(error);
    }
};



exports.passportVerif = async (req,res,next)=>{
    try{
        const {id_number,dob} =req.body;
        const response = await commonVerificationService.passportVerif(id_number,dob);
        res.json(response);


        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success",
        //     "reference_id": 20283460,
        //     "data": {
        //     "client_id": "passport_150021166d8b295f",
        //         "passport_number": "X2323232",
        //         "full_name": "Dummy Name",
        //         "dob": "1999-09-25",
        //         "date_of_application": "1800-01-01",
        //         "file_number": "UP1620210024803"
        // }
        // }

    }
    catch (error){
        next(error);
    }
};


exports.fssaiVerif =async (req,res,next) =>{
    try {
        const {fssai_number} =req.body;
        const response = await commonVerificationService.fssaiVerif(fssai_number);
        res.json(response);


        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success",
        //     "reference_id": 20283467,
        //     "data": {
        //     "client_id": "corporate_fssai_feec6de56003f708",
        //         "fssai_number": "UP1620210024803",
        //         "details": [
        //         {
        //             "address": "EXTENTION BUILDING, MANGUSHREE COMPLEX, POST-KHANJANCHAK",
        //             "license_no": "UP1620210024803",
        //             "fbo_id": 73061695,
        //             "display_ref_id": "30191207152500067",
        //             "license_category_name": "Registration",
        //             "state_name": "West Bengal",
        //             "status_desc": "License Issued",
        //             "license_category_id": 3,
        //             "company_name": "SURYODOY ENTERPRISE",
        //             "license_active_flag": false,
        //             "ref_id": 105813727,
        //             "app_type_desc": "New Registration",
        //             "premise_pincode": 721602
        //         }
        //     ]
        // }
        // }
    }catch (error){
        next(error);
    }
}