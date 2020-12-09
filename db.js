const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//connect to db
//using dotenv for better connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB connected successfully");
    } else {
      console.log("Error in connection : " + JSON.stringify(err, undefined, 2));
    }
  }
);

module.exports = mongoose;
