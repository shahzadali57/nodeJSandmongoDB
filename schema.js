const mongoose = require('mongoose');


const signupSchema = new mongoose.Schema({
    name:String,
    age:Number,
    adress:String,
    email:String,
    password:String       
})

const signupModel = mongoose.model('signup', signupSchema)
module.exports = signupModel;



