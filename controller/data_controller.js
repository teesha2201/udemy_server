const {home} = require("../dataStore")
const DataModel = require("../model/data_model");

const createData = async (req, res) => {
  const response = await DataModel.create(home);
  console.log(response)
  res.send(response);
};

const getData = async (req, res) => {
  const result = await DataModel.find({});
  res.send(result);
};
// const update = async (req,res) => {
//   const updateDb = await DataModel.update(home);
//   console.log(updateDb);
//   res.send(updateDb)
// }


module.exports = {
  createData,
  getData,
  // update
};