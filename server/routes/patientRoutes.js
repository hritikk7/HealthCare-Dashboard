const express = require("express")
const router = express.Router();
const patientController = require("../controllers/patientController")

router.get("/patients", patientController.getAllPatients)
router.get('/create', patientController.createPatient)



module.exports = router;