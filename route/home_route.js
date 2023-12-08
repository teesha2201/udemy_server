const {createData,getData,searchData,addtocart,getaddtocart,singleCartdelete } = require("../controller/data_controller");
const { login, register} = require("../controller/user_controller");

const {LearningCart,LearningCartGet,cartDelete} = require("../controller/data_controller");


const Route = require("express").Router();

Route.post("/createdatainstore", createData);
Route.get("/getdatafromstore", getData);
Route.post("/register",register);
Route.post("/login",login);



Route.get("/search",searchData);

Route.post("/learnercart" , LearningCart);
Route.get("/learningcartget",LearningCartGet);
Route.post("/addtocart",addtocart);
Route.get("/getaddtocart",getaddtocart);
Route.delete("/cartdelete",cartDelete);
Route.post("/deleteitem",singleCartdelete)

module.exports = Route;