const mongoose = require("mongoose");
const { Schema } = mongoose;
const PatientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  PatientId: {
    type: Number,
    required: false,
    unique: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
    required: false,
  },
  blood_group: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  basic_history: {
    type: String,
    required: false,
  },

  //gender, blood group , age , allergies, basic history (like dibetic or not)
  //
});
const Patient = mongoose.model("patient", PatientSchema);

module.exports = Patient;
