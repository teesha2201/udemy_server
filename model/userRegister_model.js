const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name is required"],
    },
    email: {
        type: String,
        required: [true,"enter your email"],
        unique: true,
        trim: true,
        lowercase: true,
    },
   
    password: {
        type: String,
        required: [true,"enter your password"],
        // maxlength:12
    }
  
});
const UserRegister = mongoose.model("Register_user", userSchema);
module.exports = UserRegister;
