const express = require("express");
let dotenv = require("dotenv").config();
const connectDB = require("./db");
const cors = require("cors");
const patientRoutes = require("./routes/patientRoutes");
const userRoutes = require("./routes/userRoutes");
const verifyToken = require("./middlewares/authMiddleware");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Origin",
    "X-Requested-With",
    "Accept",
    "x-client-key",
    "x-client-token",
    "x-client-secret",
    "Authorization",
  ],
};
//db connection
connectDB();
const app = express();

//Cors
app.use(cors(corsOptions));

//Middlewares
app.use(express.json());

//routes
app.use("/api/patient", verifyToken, patientRoutes);
app.use("/api/user", userRoutes);

app.get("/test", (req, res) => {
  console.log("listning");
  res.send("asdrf");
});
app.listen(process.env.PORT, () => {
  console.log("Listning on port :", process.env.PORT);
});
