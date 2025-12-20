const mongoose = require("mongoose")
const Schema = mongoose.Schema
 
const productschema = new Schema({
Blog : string,
Title : string,
 Subtitle : string,
 Description : string
})
const Product = mongoose.model("Product",productschema)
module.exports = Product