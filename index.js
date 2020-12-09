const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const { mongoose } = require("./db.js");
var employeeController = require('./controllers/employee_controller.js');

var app = express();
app.use(bodyParser.json());

//defining connection since angular runs on 4200
app.use(cors({ origin: 'http://localhost:4200' }));
app.listen(3000, () => console.log("Server started at port : 3000"));

app.use('/employees', employeeController);