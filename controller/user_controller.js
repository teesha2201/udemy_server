const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRegister = require("../model/userRegister_model");
const sycret_key = "mern";

const register = async (req, res) => {

  const data =  req.body;
  console.log(data)

  const details = await UserRegister.findOne({ email: `${data.email}` });
 try{
  if (details) {
    res.send({ msg: "user already registered with this email" });
    }
  else{
    const hashpassword = bcrypt.hashSync(data.password, 10);
    console.log(hashpassword);
  
    const tempObj = {
      email: data.email,
      password: hashpassword,
      name:data.name,
      phoneNo:data.phoneNo,
     
    };
  
    const response =await UserRegister.create(tempObj);
    console.log(response);
    const token = jwt.sign({ email: data.email }, sycret_key, { expiresIn: "7d" });
   
   
    return res.send({
      msg: "user registered successfully",
      token: token,
    });
  }
 
 }
  
 catch(err){
  console.log(err);
 }
};

const login = async(req, res) => {
    const data = req.body;
  
      const details =await UserRegister.findOne({email:`${data.email}`});
      if (details) {
        const validate = bcrypt.compareSync(data.password, details.password);
        if (validate) {
          const token = jwt.sign({ email: data.email }, sycret_key, { expiresIn: "7d" },(err)=>{
            if(err){
              res.send("jwt token error");
             
            }
          });
          return res.send({
            msg: "user logged in successfully",
            token: token,
            name:details.name
          });
        } else {
          return res.send({
            msg: "password is wrong",
          });
        }
      }
      
    return res.send({
      msg: "email wrong",
    });
  };

  module.exports = { login, register };











