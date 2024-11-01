const mongoose =require("mongoose");

 const connectDB = async  ()=>{
    await mongoose.connect("mongodb+srv://satyamsinghu123123:SatyamSingh1@cluster0.z5w55.mongodb.net/FOOD_DEL_APP")
    console.log("connected to data base ");
}
module.exports = {
     connectDB
     }