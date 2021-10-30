const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const bodyparser = require("body-parser");
app.use(bodyparser());
app.use(cors()); 
require("./connection");
const DataModel = require("./modelSchema");


//Register User Validation and Autentication

app.post('/register', async (req, res) => {

  const { fname, email, password } = req.body;
  const userExist = await DataModel.findOne({ email });

  if (userExist) {
    res.send(false)
  }
  else {
    const obj = new DataModel({ fname, email, password });
    const register = await obj.save();
    try {
      register ? res.send(true) : res.send(false);
    }
    catch (err) {
      res.send(err);
    }
  }
  
   

})

//Login User Authentication

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userExist = await DataModel.findOne({ email, password })
  try {
    userExist ? res.send(true) : res.send(false)
  }
  catch {
    res.send(err);
  }
})





//Listen from Server
app.listen(port, console.log('Server is Running at port-4000'));