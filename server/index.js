const express = require("express");
let dotenv = require("dotenv").config();
const connectDB = require("./db");
const patientRoutes = require("./routes/patientRoutes")
const userRoutes = require("./routes/userRoutes")
//db connection 
connectDB();
const app = express();

//Middlewares
app.use(express.json())

//routes
app.use("/api/patient", patientRoutes)
app.use("/api/user", userRoutes)

app.get("/test",(req, res)=>{
    console.log( "listning");
    res.send("asdrf")
})
app.listen(process.env.PORT, () => {
  console.log("Listning on port :", process.env.PORT);
});
