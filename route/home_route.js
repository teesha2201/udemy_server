const {createData,getData } = require("../controller/data_controller")
const { login, register} = require("../controller/user_controller")
// const auth = require('../middleware/user_auth')


const Route = require("express").Router();

Route.post("/createdatainstore", createData);
Route.get("/getdatafromstore", getData);
// Route.put("/updatedatainstore",update)
Route.post("/register",register);
Route.post("/login",login);

module.exports = Route;