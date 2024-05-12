const Patient = require("../models/patient");
const { v4: uuidv4 } = require("uuid");

//Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const allPatients = await Patient.find({});
    return res.status(200).json({
      patinets: allPatients,
    });
  } catch (err) {
    console.log("Error : ", err);
    return res.status(400).json({
      message: "Cannot get all patients",
    });
  }
};

//Create patient
exports.createPatient = async (req, res) => {
  const { bed_id, patinetname } = req.body;
  console.log(bed_id, patinetname);
  try {
    const existingPatient = await Patient.findOne({ bed_id });
    if (existingPatient) {
      return res.status(400).json({
        message: "patient already exist with associated bed_id",
      });
    }
    const newPatient = Patient({
      patient_id: uuidv4(),
      patinetname,
      bed_id,
    });
    await newPatient.save();
    return res.status(200).json({
      message: "Patient Created Succesfully",
    });
  } catch (err) {
    console.log("err :", err);
    return res.status(400).json({
      message: "Error creating patient!!",
    });
  }
};
