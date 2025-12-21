const mongoose= require("mongoose")

async function dbconnect() {
    await mongoose.connect(process.env.CONNECTION_STRING)
 console.log("DB connected sucessfully !!!")
}
module.exports= dbconnect 