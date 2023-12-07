const mongoose = require("mongoose");


const LearnerCartdata = mongoose.Schema({
    id : Number,
    img : String,
    heading:String,
    rating:String,
    name:String,
    viewer:String,
    updated_date:String,
    total_hrs:String,
      

});

const addtoCart = mongoose.Schema({
    id : Number,
    img : String,
    heading:String,
    rating:String,
    name:String,
    updated_date:String,
    total_hrs:String, 
    price:Number
});

const LearnerCartModel = mongoose.model("LearnerCartModel", LearnerCartdata);
const AddtoCart = mongoose.model("AddtoCartModel",addtoCart)
module.exports = {LearnerCartModel,AddtoCart};