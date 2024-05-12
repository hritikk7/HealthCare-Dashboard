const { Schema, model } = require("mongoose");

const patientSchema = new Schema({
  patient_id: { type: String, required: true },
  patinetname: { type: String, required: true },
  bed_id: { type: Number, require: true },
});

module.exports = model("Patient", patientSchema);
