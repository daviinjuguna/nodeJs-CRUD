const mongoose = require("mongoose");

//this is the employee model
var Employee = mongoose.model("Employee", {
  name: { type: String },
  position: { type: String },
  office: { type: String },
  salary: { type: Number },
});

module.exports = { Employee };
