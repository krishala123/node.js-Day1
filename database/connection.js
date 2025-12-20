const mongoose= require("mongoose")

async function dbconnect() {
    await mongoose.connect("mongodb+srv://krishalac9_db_user:krishala123@cluster0.qsiebq1.mongodb.net/?appName=Cluster0")
}
       console.log("DB connected sucessfully !!!")
module.exports= dbconnect 