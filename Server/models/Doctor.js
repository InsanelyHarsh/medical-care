const mongoose = require("mongoose");
const { Schema } = mongoose;

const DocSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  DocId: {
    type: Number,
    required: false,
    unique: false,
  },
  isApproved: {
    type: Boolean,
    required: true,
  },
  imageurl: {
    type: String,
    required: false,
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
  experience: {
    type: Number,
    default: 0,
  },
  speciality: {
    type: String,
    required: false,
  },
  timing: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    default: "very genius doctor of out hospital.",
  },
  awards: {
    type: String,
    required: false,
  },
  membership: {
    type: String,
    required: false,
  },
});
const Doctor = mongoose.model("doctor", DocSchema);

module.exports = Doctor;
