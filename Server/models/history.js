const mongoose = require("mongoose");
const { Schema } = mongoose;
const HistorySchema = new Schema({
  patient_id: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  duration: {
    type: String,
    required: false,
  },
  treatment: {
    type: String,
    required: false,
  },
  medicines_given: {
    type: Array,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
});
const History = mongoose.model("history", HistorySchema);

module.exports = History;
