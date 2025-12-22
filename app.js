const express = require("express")
const dbconnect= require("./database/connection.js")
const User = require("./models/userModel.js")
const Product = require("./Models/productModel.js")
const app = express()
const bcrypt = require("bcrypt")
const { homePage, aboutPage, fetchUser, register } = require("./controllers/userController.js")
const jwt = require("jsonwebtoken")

 
require("dotenv").config()


dbconnect()
app.use(express.json())

app.get("/",homePage)


app.get("/",aboutPage)


app.get("/fetch-users",fetchUser)


app.post("/register",register)
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
        password:bcrypt.hashSync(password,10),
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
        res.json({
            message : "Not registered!!"
        })
    }else{
        console.log(data.password)
        const isMatched = bcrypt.compareSync(password,data.password)
        if(isMatched){
            const token = jwt.sign({id : data._id},process.env.JWT_SECRET,{
                expiresIn : "1d"
            })
            res.json({
                message: "Logged in success",
                token : token
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
