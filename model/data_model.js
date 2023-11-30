const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id : Number,
    img : String,
    heading:String,
    para:String,
    rating:String,
    name:String,
    viewer:String,
    previous_price:String,
    price : Number,
    updated_date:String,
    total_hrs:String,
    
    key_1:String,
    key_2:String,
    key_3:String,
    page:String,
    category:String,
    sub_category:String,
    popular_topic:String

});
const DataModel = mongoose.model("DataModel", userSchema);
module.exports = DataModel;