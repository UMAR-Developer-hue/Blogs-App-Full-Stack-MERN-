const mongoose = require("mongoose");
require("dotenv").config();
let MONGO_URI = process.env.MONGO_URI;
const mongo = () => {
  mongoose.connect(MONGO_URI,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
    .then(() => {
      console.log("connected to MongoDb");
    })
    .catch((err) => {
      console.log("Error connecting to mongo", err);
    });
};

module.exports = mongo 


