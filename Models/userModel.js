const mongoose = require("mongoose")
const Schema = mongoose.Schema
 
const userschema = new Schema({
name : String,
email : String,
 password : String
})
const User = mongoose.model("User",userschema)
module.exports = User 