const mongoose = require("mongoose");
const { Schema } = mongoose;
const HospitalSchema = new Schema({
  hospitalId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  speciality: {
    type: Array,
    required: true,
  },
});
const Hospital = mongoose.model("hospital", HospitalSchema);

module.exports = Hospital;
