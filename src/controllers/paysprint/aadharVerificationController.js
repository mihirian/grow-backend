const aadharVerificationService = require("../../services/paysprint/aadharVerificationService");


exports.validateWithAadharNumber = async (req,res,next)=>{
  try{
      const {id_number} =req.body;
      const response = await aadharVerificationService.validateWithAadharNumber(id_number);
      res.json(response);
      // {
      //     "statuscode": 200,
      //     "status": true,
      //     "message": "Success",
      //     "reference_id": 20283128,
      //     "data": {
      //     "client_id": "aadhaar_validation_e46a5f065a69046f",
      //         "age_range": "30-40",
      //         "aadhaar_number": "244587953675",
      //         "state": "Bihar",
      //         "gender": "M",
      //         "last_digits": "657",
      //         "is_mobile": true,
      //         "remarks": "success",
      //         "less_info": false
      // }
      // }
  }
  catch (error){
      next(error);
  }
};
