const {home} = require("../dataStore")
const DataModel = require("../model/data_model");
const { LearnerCartModel ,AddtoCart }= require("../model/Learner_model")

const createData = async (req, res) => {
  const response = await DataModel.create(home);
  console.log(response)
  res.send(response);
};

const getData = async (req, res) => {
  const result = await DataModel.find({});
  res.send(result);
};


const searchData = async (req, res) => {
  const {page} = req.query
    console.log(page);

    const queryObj = {}
    if(page){
        queryObj.page = {$regex : page , $options : "i"};
    }
    const search = await DataModel.find(queryObj)
    
    return res.send(search)
}

const LearningCart = async(req,res) =>{
  const cartdata = req.body;

  const create = await LearnerCartModel.create(cartdata);

  res.send(create)
}
const LearningCartGet = async(req,res) =>{
  const getdata = await LearnerCartModel.find({});

  res.send(getdata);
}
const addtocart = async(req,res)=>{
  const getdata = req.body;
  const data = await AddtoCart.create(getdata);
  res.send(data);
}

const getaddtocart = async(req,res)=>{
  const data = await AddtoCart.find({});
  res.send(data);
  
}

const cartDelete = async (req,res) =>{
  const deletedata = await AddtoCart.deleteMany({});
  res.send(deletedata)
}

module.exports = {
  createData,
  getData,
  searchData,
  LearningCart,
  LearningCartGet,
  addtocart,
  getaddtocart,
  cartDelete
 
};