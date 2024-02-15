const Mail = require('../models/mailschema');
const sendmessage = require('./sendmessage');


exports.send = async(req , res) =>{
    try{
      const {name , email , message} = req.body;
      console.log(name , email , message);
      await sendmessage(name, email, message);
    return res.status(201).json({
      success: true,
      data: { name, email, message },
      message: "We will contact you soon...",
    });
  }  catch(err){
    console.error(err);
    return res.status(500).json({
      status: false,
      message: 'An error occurred while sending a message.',
    });
    }
}