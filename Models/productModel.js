const mongoose = require("mongoose")
const Schema = mongoose.Schema
 
const productschema = new Schema({
Blog : String,
Title : String,
 Subtitle : String,
 Description : String
})
const Product = mongoose.model("Product",productschema)
module.exports = Product