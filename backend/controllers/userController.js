const  {userModel}= require("../models/userModel");
const  jwt =require("jsonwebtoken")
const  bcrypt= require("bcrypt")
const  validator= require("validator")
const  mongoose = require("mongoose");


// login user 
const loginUser =  async (req, res)=>{
    try {
    const {email , password } = req.body;
    const user  = await userModel.findOne({email});

    if (!user){
        return res.json({success : false , message : "user does not exist "});
    }
    const isMatch = await bcrypt.compare(password , user.password);

    if (!isMatch){
        return res.json({success : false , message : "wrong cred provided"});
    }

    const token = createToken(user._id);
    res.json({success: true , token });}
    catch( error ){
        console.log(error)
        res.json({success : false  , error: "error" });
    }

}

const createToken =(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET);
}
// register user 

const registerUser = async (req,res)=>{
    const {name , password , email} = req.body  ;
    try{
        const exist = await userModel.findOne({email : email})
        if (exist){
            return res.json({success: false , message: "user already exist"});
        }
        //validating email formating and strong password 
        if(!validator.isEmail(email)){
            return res.json({success: false , message: "please enter valid email"});
        }
        if (password.length  < 8){
            return res.json({success: false , message: "please enter string password "});
        }
        // hashing user password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password ,salt);
        
        const newUser = new userModel({
            name : name,
            email : email,
            password : hashedPassword
        })
        const user  = await newUser.save()
        const token = createToken(user._id);
        res.json({success: true, token : token })

    }catch(error){
        console.log(error);
        res.json({success : false ,message : "error"})
    }
}

module.exports = {
    loginUser,
    registerUser

}