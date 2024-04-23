const aadharVerificationService = require("../../services/paysprint/aadharVerificationService");


exports.validateWithAadharNumber = async (req,res,next)=>{
  try{
      const {id_number} =req.body;
      const response = await aadharVerificationService.validateWithAadharNumber(id_number);
      res.json(response);
  }
  catch (error){
      next(error);
  }
};
