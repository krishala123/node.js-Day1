const User = require("../models/userModel.js")
const bcrypt = require("bcrypt")

exports.homePage= function(haha,hehe){
    hehe.json({
        name : "home page"
    })
}

 exports.aboutPage=function(req,res){
    res.json({
        address : "About page address",
        age : 19,
        name : "krishala"
    })
}

exports.fetchUser = async function(req,res){
    const data = await User.find()
    res.json({
        data : data 
    })
}
exports.register = async function(req,res){
    const name = req.body.name 
    const email = req.body.email
    const password = req.body.password
    // const {name,email,password} = req.body
    console.log(name,email,password)
    await User.create({
        name : name,
        email : email,
        password: bcrypt.hashSync(password,10)
    })
    
    res.json({
        message : "User registered sucessfully !!!"
    })
}