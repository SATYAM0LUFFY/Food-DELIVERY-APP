const { userModel } = require("../models/userModel")

// ADD ITEMS TO USER CART 
const addToCart = async (req,res)=>{
    try {
        let userData = await userModel.findOne({_id : req.body.userId})
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]) {
        cartData[req.body.itemId] = 1
        }
        else{
        cartData[req.body.itemId] +=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId , {cartData});
        res.json({success : true, message : "added to cart "})
    } catch (error) {
        console.log(error);
        res.json({success : false , message : "error from cart controller.js" })
    }
}

// Remove items from user cart 
const removeFromCart = async (req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] >0){
            cartData[req.body.itemId] -= 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success: true , message : "message deleted "})

    }catch(error){
        console.log(error);
        res.json({success : false , message : "error"})
        
    }
}

// Fetch User Cart Data
const getCart = async(req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success: true, cartData : cartData })
    }
    catch(error){
        console.log(error)
        res.json({success : false ,message : "Error"})
    }
}

module.exports= { addToCart , getCart ,removeFromCart};