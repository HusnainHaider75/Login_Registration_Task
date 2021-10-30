const mongoose = require('mongoose');
const DataModel = mongoose.Schema({
    fname: String,
    email: String,
    password: String,
});
const DataSample =mongoose.model('Register', DataModel);
module.exports =DataSample;
