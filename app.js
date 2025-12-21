const express = require("express")
const dbconnect= require("./database/connection.js")
const User = require("./models/userModel.js")
const Product = require("./Models/productModel.js")
const app = express()
const bcrypt = require("bcrypt")
require("dotenv").config()


dbconnect()
app.use(express.json())

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


app.post("/register",async function(req,res){
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
})
app.post("/registerblog",async function(req,res){
    const Title = req.body.title 
    const Subtitle = req.body.subtitle
    const Description = req.body.description
    // const {name,email,password} = req.body
    console.log(Title,Subtitle,Description)
    await Product.create({
        Title ,
        Subtitle ,
        Description
    })
    
    res.json({
        message : "User registered sucessfully !!!"
    })
})

app.delete("/delete",async function(req,res){
   const id = req.body.id
    await User.findByIdAndDelete(id)
    res.json({
        message : "User with that id deleted sucessfully !!!"
    })
})
app.get("/fetch-users/:id", async function(req,res){
    // response ma user table ma vako user data sent garnu paryo
    console.log (req.params)
    const data = await User.findById(req.params.id)
    console.log(data)
    res.json({
        data : data 
    })
})
app.get("/fetch-blog/:id", async function(req,res){
    // response ma user table ma vako user data sent garnu paryo
    console.log (req.params)
    const data = await Product.findById(req.params.id)
    console.log(data)
    res.json({
        data : data 
    })
})
app.patch("/update-user/:id",async function(req,res){
    const id= req.params.id
    const name= req.body.name
    const email= req.body.email
    const password= req.body.password
    await User.findByIdAndUpdate(id,{
        name,
        password:bcyrpt.hashSync(password,10),
        email
    })
    res.json({
        message: "user updated successfully !!!"
    })
})
app.patch("/update-blog/:id",async function(req,res){
    const id= req.params.id
    const Title= req.body.title
    const Subtitle= req.body.subtitle
    const Description= req.body.description
    await Product.findByIdAndUpdate(id,{
        Title,
        Description,
        Subtitle
    })
    res.json({
        message: "blog updated successfully !!!"
    })
})

//login
app.post("/login",async function(req,res){
    const email = req.body.email
    const password = req.body.password
    const data = await User.findOne({email:email})
    if(!data){
        req.json({
            message : "Not registered!!"
        })
    }else{
        const isMatched = bcrypt.compareSync(password,data.password)
        if(isMatched){
            res.json({
                message: "Logged in success"
            })
        }else{
            res.json({
                message : "Invalid password"
            })
        }
    }
})
app.listen(3000,function(){
    console.log("server has started at port 3000")
})
