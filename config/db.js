const mongoose = require("mongoose");
const cloudurl = "mongodb+srv://teesha2201:gupta@cluster0.dbbzgnj.mongodb.net/udemyDataStore?retryWrites=true&w=majority";
mongoose.get("strictQuery",true)

const connection = async () => {
  try {
    await mongoose.connect(cloudurl);

    console.log("Connected to the database");
  } 
  catch (err) {
    console.error("Error occured in connection to DataBase", err);
  }
};

module.exports = connection;