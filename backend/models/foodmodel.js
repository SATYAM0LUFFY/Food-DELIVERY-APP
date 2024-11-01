const mongoose =require("mongoose")

const foodSchema = new mongoose.Schema({
    name : {type: String , required : true},
    description : {type : String ,required: true },
    price : {type : Number , required: true  },
    image : {type : String , required: true },
    category : {type: String , required : true }
})

const foodModel = mongoose.models.food ||  mongoose.model("food", foodSchema);  // every time tjis code runs this will create a new foosacema so to avoid it 
                                                                            // we use mongoose.models.food 
module.exports={
    foodModel
}