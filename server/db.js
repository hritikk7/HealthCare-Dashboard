require("dotenv").config

const mongoose = require("mongoose")


const connectDB = async () =>{
    try{
        mongoose.connect(process.env.DB_URI)
        console.log("Connected on port :", process.env.PORT);
    }catch(err){
        console.log("Error cannot connect to the server :", err);
        process.exit(1)
    }
}

module.exports = connectDB