const express = require("express")
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


app.listen(3000,function(){
    console.log("server has started at port 3000")
})
