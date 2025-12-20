const express = require("express")
const dbconnect= require("./database/connection.js")
const User = require("./models/userModel.js")
const app = express()
app.get("/", function(haha,hehe){
    hehe.json({
        name : "home page"
    })
})

app.get("/about", function(req,res){
    res.json({
        address : "About page address",
        age : 19,
        name : "krishala"
    })
})
app.get("/fetch-users", async function(req,res){
    // response ma user table ma vako user data sent garnu paryo
    const data = await User.find()
    res.json({
        data : data 
    })
})


app.listen(3000,function(){
    console.log("server has started at port 3000")
})
