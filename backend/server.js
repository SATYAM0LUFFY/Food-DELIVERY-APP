const express =require("express")
const cors = require("cors");
const { connectDB } = require("./config/db.js");
const { foodRouter } = require("./Routes/foodRoute.js");
const { userRouter } = require("./Routes/userRoute.js");
const { cartRouter } = require("./Routes/cartRoute.js");
const { orderRouter } = require("./Routes/orderRoute.js");
require('dotenv').config();




//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware 
app.use(express.json());
app.use(cors());

//dpconnection 
connectDB();

//api endpoint 
app.use("/api/food" , foodRouter);
app.use("/images",express.static("uploads"));
app.use("/api/user" , userRouter);
app.use("/api/cart" ,cartRouter);
app.use("/api/order", orderRouter);

app.get("/",(req,res)=>{
    res.send("api working ");
} )  // get method us a http method 


app.listen(port,()=>{
    console.log(`server started on ${port}`);            // the function writen is a callback functoion 
});