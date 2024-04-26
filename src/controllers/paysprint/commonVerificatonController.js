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


exports.fssaiVerif =async (req,res,next) => {
    try {
        const {fssai_number} = req.body;
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
    } catch (error) {
        next(error);
    }

};

    exports.iec_verify =async (req,res,next) =>{
        try {
            const {iec_number} =req.body;
            const response = await commonVerificationService.iec_verify(iec_number);
            res.json(response);

            // {
            //     "statuscode": 200,
            //     "status": true,
            //     "message": "Success",
            //     "reference_id": 20283470,
            //     "data": {
            //     "client_id": "iec_4772373b081028ec",
            //         "iec_number": "UP1620210024803",
            //         "personal_details": {
            //         "ie_code": "UP1620210024803",
            //             "name": "DIAMOND SEAFOOD EXPORTS",
            //             "address": "NO.3/52, ,KRISHNARAJAPURAM Contact No: 919443736278 ,TUTICORIN , TUTICORIN ,TAMIL NADU,628002",
            //             "iec_status": "Valid",
            //             "pan": "AABFD0519L"
            //     },
            //     "bank_details": []
            // }
            // }
        }catch (error){
            next(error);
        }
};

exports.mca_verify =async (req,res,next) =>{
    try {
        const {id_number} =req.body;
        const response = await commonVerificationService.mca_verify(id_number);
        res.json(response);


        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success",
        //     "reference_id": 20283471,
        //     "data": {
        //     "client_id": "company_e0627618e8f131ff",
        //         "company_id": "UP1620210024803",
        //         "company_type": "Company",
        //         "company_name": "PAYSPRINT PRIVATE LIMITED",
        //         "details": {
        //         "company_info": {
        //             "cin": "UP1620210024803",
        //                 "roc_code": "RoC-Delhi",
        //                 "registration_number": "XXXXXX",
        //                 "company_category": "Company limited by Shares",
        //                 "class_of_company": "Private",
        //                 "company_sub_category": "Non-govt company",
        //                 "authorized_capital": "100000",
        //                 "paid_up_capital": "100000",
        //                 "number_of_members": "0",
        //                 "date_of_incorporation": "2022-06-13",
        //                 "registered_address": "Plot No. 42, DLF, Industrial Area, Kirti Nagar, West Delhi Delhi West Delhi DL 110015 NEW DELHI West Delhi DL 110015 IN",
        //                 "address_other_than_ro": "-",
        //                 "email_id": "info@gmail.in",
        //                 "listed_status": "Unlisted",
        //                 "active_compliance": null,
        //                 "suspended_at_stock_exchange": "-",
        //                 "last_agm_date": "1800-01-01",
        //                 "last_bs_date": "1800-01-01",
        //                 "company_status": "Active",
        //                 "status_under_cirp": null
        //         },
        //         "directors": [
        //             {
        //                 "din_number": "26808206",
        //                 "director_name": "Munna Bhaiya",
        //                 "start_date": "2023-01-27",
        //                 "end_date": "1800-01-01",
        //                 "surrendered_din": null
        //             },
        //             {
        //                 "din_number": "43349553",
        //                 "director_name": "Kaleen Bhaiya",
        //                 "start_date": "2022-06-13",
        //                 "end_date": "1800-01-01",
        //                 "surrendered_din": null
        //             }
        //         ],
        //             "charges": []
        //     }
        // }
        // }
    }catch (error){
        next(error);
    }
};

exports.gst_verify =async (req,res,next) =>{
    try {
        const {id_number,filing_status} =req.body;
        const response = await commonVerificationService.gst_verify(id_number,filing_status);
        res.json(response);


        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success",
        //     "reference_id": 20283474,
        //     "data": {
        //     "client_id": "corporate_gstin_8472c6a8bd20ebd1",
        //         "gstin": "UP1620210024803",
        //         "pan_number": "AAACR5055K",
        //         "business_name": "RELIANCE INDUSTRIES LIMITED",
        //         "legal_name": "RELIANCE INDUSTRIES LIMITED",
        //         "center_jurisdiction": "Commissionerate - BELAPUR,Division - DIVISION IV,Range - RANGE-IV (Jurisdictional Office)",
        //         "state_jurisdiction": "State - Maharashtra,Zone - Thane,Division - RAIGAD,Charge - URAN_701",
        //         "date_of_registration": "2017-07-01",
        //         "constitution_of_business": "Public Limited Company",
        //         "taxpayer_type": "Regular",
        //         "gstin_status": "Active",
        //         "date_of_cancellation": "1800-01-01",
        //         "field_visit_conducted": "No",
        //         "nature_bus_activities": [
        //         "Factory / Manufacturing",
        //         "Retail Business",
        //         "Input Service Distributor (ISD)",
        //         "Bonded Warehouse",
        //         "SEZ",
        //         "Works Contract",
        //         "Warehouse / Depot",
        //         "Service Provision",
        //         "Leasing Business",
        //         "Office / Sale Office",
        //         "Recipient of Goods or Services",
        //         "Wholesale Business",
        //         "EOU / STP / EHTP",
        //         "Supplier of Services",
        //         "Others",
        //         "Export"
        //     ],
        //         "nature_of_core_business_activity_code": "MFT",
        //         "nature_of_core_business_activity_description": "Manufacturer",
        //         "aadhaar_validation": "Yes",
        //         "aadhaar_validation_date": "2023-01-03",
        //         "filing_status": [],
        //         "address": "5, 5, TTC Industrial Area, Reliance Corporate Park, Thane Belapur Road, Ghansoli, Navi Mumbai, Thane, Maharashtra, 400701",
        //         "hsn_info": [],
        //         "filing_frequency": []
        // }
        // }
    }catch (error){
        next(error);
    }
};

exports.tan_verify =async (req,res,next) =>{
    try {
        const {id_number} =req.body;
        const response = await commonVerificationService.tan_verify(id_number);
        res.json(response);

        //
        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success",
        //     "reference_id": 20283475,
        //     "data": {
        //     "client_id": "tan_8c84027b12dd90c0",
        //         "tan": "UP1620210024803",
        //         "name": "PAYSPRINT PRIVATE LIMITED"
        // }
        // }
    }catch (error){
        next(error);
    }
};


exports.lei_verify =async (req,res,next) =>{
    try {
        const {id_number} =req.body;
        const response = await commonVerificationService.lei_verify(id_number);
        res.json(response);


        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success",
        //     "reference_id": 20283479,
        //     "data": {
        //     "client_id": "lei_f8205e3f6652d5dc",
        //         "lei_number": 123,
        //         "full_name": "SHREE ANANT INFRA ENERGY PVT LTD",
        //         "legal_entity_address": {
        //         "registered_first_address_line": "PLOT NO-N-4/232, SECOND FLOOR, IRC VILLAGE, BEHIND RELIANCE FRESH, NAYAPALLI BHUBANESWAR",
        //             "additional_address_line_1": "",
        //             "additional_address_line_2": "",
        //             "additional_address_line_3": "",
        //             "country": "India",
        //             "region": "Odisha",
        //             "city": "KHORDA",
        //             "zipcode": "751015"
        //     },
        //     "headquarters_entity_address": {
        //         "registered_first_address_line": "PLOT NO-N-4/232, SECOND FLOOR, IRC VILLAGE, BEHIND RELIANCE FRESH, NAYAPALLI BHUBANESWAR",
        //             "additional_address_line_1": "",
        //             "additional_address_line_2": "",
        //             "additional_address_line_3": "",
        //             "country": "India",
        //             "region": "Odisha",
        //             "city": "KHORDA",
        //             "zipcode": "751015"
        //     },
        //     "entity_identifiers": {
        //         "registration_authority_name": "Ministry of Corporate Affairs",
        //             "registration_authority_id": "U27100OR2008PTC010223",
        //             "jurisdiction": "IN",
        //             "legal_form": "Private Limited Companies",
        //             "lei_registration_date": "2019-06-11",
        //             "lei_registration_last_update": "2020-06-12",
        //             "entity_status": "ACTIVE",
        //             "entity_expiration_date": "",
        //             "lei_next_renewal_date": "2020-06-11",
        //             "entity_expiration_reason": "",
        //             "lei_registration_status": "LAPSED",
        //             "succsessor_lei": "",
        //             "lou_id": "LEIL",
        //             "lei_validation_source": "FULLY_CORROBORATED"
        //     }
        // }
        // }
    }catch (error){
        next(error);
    }
};

//14. Shop and Establishment Act

exports.getStateList =async (req,res,next) =>{
    try {
        // const {id_number} =req.body;
        const response = await commonVerificationService.getStateList();
        res.json(response);


        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success!",
        //     "data": [
        //     {
        //         "state": "Delhi",
        //         "state_code": "DL"
        //     },
        //     {
        //         "state": "Haryana",
        //         "state_code": "HR"
        //     },
        //     {
        //         "state": "Jammu And Kashmir",
        //         "state_code": "JK"
        //     },
        //     {
        //         "state": "Karnataka",
        //         "state_code": "KR"
        //     },
        //     {
        //         "state": "Rajasthan",
        //         "state_code": "RJ"
        //     },
        //     {
        //         "state": "Telangana",
        //         "state_code": "TL"
        //     },
        //     {
        //         "state": "Uttarakhand",
        //         "state_code": "UK"
        //     },
        //     {
        //         "state": "Uttar Pradesh",
        //         "state_code": "UP"
        //     },
        //     {
        //         "state": "West Bengal",
        //         "state_code": "WB"
        //     }
        // ]
        // }
    }catch (error){
        next(error);
    }
};

exports.shop_establishment =async (req,res,next) =>{
    try {
        const {state_code,shop_number} =req.body;
        const response = await commonVerificationService.shop_establishment(state_code,shop_number);
        res.json(response);



        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success",
        //     "reference_id": 20283480,
        //     "data": {
        //     "client_id": "se_70bffa7e002caa76",
        //         "se_number": "123",
        //         "state_code": "DL",
        //         "state_name": "Delhi",
        //         "business_name": "Mohd Ibrahim Fruit Patri",
        //         "address": "4728 Gali Razia Begum Hauz Qazi Delhi Delhi. PIN-110006 ",
        //         "user_mobile_number": ":9650423915 23233843 Fax:",
        //         "registration_number": "2010012911",
        //         "registration_date": "2010-04-02",
        //         "category": "Fruit & Vegetables(Fresh, Processed & Dry)",
        //         "certificate_number": "2010012911",
        //         "document_link": null
        // }
        // }
    }catch (error){
        next(error);
    }
};

//14. Shop and Establishment Act


exports.rc_verify =async (req,res,next) =>{
    try {
        const {id_number} =req.body;
        const response = await commonVerificationService.rc_verify(id_number);
        res.json(response);


        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success",
        //     "reference_id": 20283481,
        //     "data": {
        //     "client_id": "rc_be4b70700e42c5b0",
        //         "rc_number": "123",
        //         "registration_date": "2015-12-16",
        //         "owner_name": "ABHINAV JAIN",
        //         "father_name": "ABHEY JAIN",
        //         "present_address": "A-0903, THE RESIDENCE, SECTOR 33, Gurgaon-122001",
        //         "permanent_address": "A-0903, THE RESIDENCE, SECTOR 33, Gurgaon-122001",
        //         "mobile_number": "",
        //         "vehicle_category": "LMV",
        //         "vehicle_chasi_number": "MA1YU2HHUF6K12744",
        //         "vehicle_engine_number": "HHF4K21436",
        //         "maker_description": "MAHINDRA & MAHINDRA LIMITED",
        //         "maker_model": "XUV500",
        //         "body_type": "SALOON",
        //         "fuel_type": "DIESEL",
        //         "color": "NPERLWHT",
        //         "norms_type": "EURO 4",
        //         "fit_up_to": "2030-12-15",
        //         "financer": "",
        //         "financed": null,
        //         "insurance_company": "The New India Assurance Company Limited",
        //         "insurance_policy_number": "31030031220100290326",
        //         "insurance_upto": "2023-12-18",
        //         "manufacturing_date": "10/2015",
        //         "manufacturing_date_formatted": "2015-10",
        //         "registered_at": "SDM GURUGRAM, Haryana",
        //         "latest_by": "2023-04-13",
        //         "less_info": true,
        //         "tax_upto": "1900-01-01",
        //         "tax_paid_upto": "1900-01-01",
        //         "cubic_capacity": "0.00",
        //         "vehicle_gross_weight": "2510",
        //         "no_cylinders": "4",
        //         "seat_capacity": "7",
        //         "sleeper_capacity": "0",
        //         "standing_capacity": "",
        //         "wheelbase": "0",
        //         "unladen_weight": "1850",
        //         "vehicle_category_description": "Motor Car(LMV)",
        //         "pucc_number": "DL00300410001347",
        //         "pucc_upto": "2023-11-10",
        //         "permit_number": "",
        //         "permit_issue_date": "1900-01-01",
        //         "permit_valid_from": "1900-01-01",
        //         "permit_valid_upto": "1900-01-01",
        //         "permit_type": "",
        //         "national_permit_number": "",
        //         "national_permit_upto": "1900-01-01",
        //         "national_permit_issued_by": "",
        //         "non_use_status": "",
        //         "non_use_from": "1900-01-01",
        //         "non_use_to": "1900-01-01",
        //         "blacklist_status": "",
        //         "noc_details": "",
        //         "owner_number": "2",
        //         "rc_status": "ACTIVE",
        //         "masked_name": false,
        //         "challan_details": null,
        //         "variant": null
        // }
        // }
    }catch (error){
        next(error);
    }
};


exports.bankaccount_verify =async (req,res,next) =>{
    try {
        const {account_number,ifsc_code} =req.body;
        const response = await commonVerificationService.bankaccount_verify(account_number,ifsc_code);
        res.json(response);


        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Transaction Success.",
        //     "data": {
        //     "nwtxnrefid": "319312001091",
        //         "reqdtls": {
        //         "usrtxnrefno": "20333001",
        //             "txntype": "IMPSP2A",
        //             "chantxnrefno": "20333001"
        //     },
        //     "nwrespmessg": "Success",
        //         "txnrefno": "BENEVALfdd1b4447a0cca9d4a26c40c405a0da3",
        //         "nwrespcode": "00",
        //         "c_name": "NOOR MOHAMMAD MOHAMMAD SALIM KHAN"
        // },
        //     "reference_id": 20283482
        // }
    }catch (error){
        next(error);
    }
};


exports.email_checker =async (req,res,next) =>{
    try {
        const {email} =req.body;
        const response = await commonVerificationService.email_checker(email);
        res.json(response);



        // {
        //     "statuscode": 200,
        //     "status": true,
        //     "message": "Success",
        //     "reference_id": 20283483,
        //     "data": {
        //     "client_id": "email_check_7cb02ce9735ca3f2",
        //         "email": "mihirmilefreelance@gmail.com",
        //         "status": "safe",
        //         "valid": true,
        //         "valid_syntax": true,
        //         "accepts_mail": true,
        //         "results": true,
        //         "smtp_connected": true,
        //         "domain": "gmail.com",
        //         "domain_age": null,
        //         "domain_registrar": null,
        //         "username": "DUMMY NAME",
        //         "disabled": false,
        //         "organization": null,
        //         "organization_mactch": null,
        //         "person_match": null,
        //         "is_temporary": false,
        //         "is_catch_all": false,
        //         "mx_records": [
        //         "alt2.gmail-smtp-in.l.google.com.",
        //         "gmail-smtp-in.l.google.com.",
        //         "alt4.gmail-smtp-in.l.google.com.",
        //         "alt1.gmail-smtp-in.l.google.com.",
        //         "alt3.gmail-smtp-in.l.google.com."
        //     ]
        // }
        // }
    }catch (error){
        next(error);
    }
};



