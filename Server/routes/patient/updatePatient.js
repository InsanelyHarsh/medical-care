
const express = require("express");
const Doctor = require("../models/Doctor");
const User = require("../models/User");
const Patient = require("../models/Patient");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { ValidatorsImpl } = require("express-validator/src/chain");
const res = require("express/lib/response");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findOne } = require("../models/Doctor");
const fetchuser = require("../middleware/Fetchuser");
const createUser = require("./auth/createUser");
const loginUser = require("./auth/loginUser");
const getUser = require("./auth/getUser");
const JWT_SECRET = "helloworld";

const updatepatient = async (req, res) => {
    // PatientId,date,gender,blood_groop,age,back_history
    const { PatientId, date, gender, blood_groop, age, basic_history } = req.body;

    const updatedprofile = {};
    if (PatientId) {
        updatedprofile.PatientId = PatientId;
    }
    if (date) {
        updatedprofile.date = date;
    }
    if (gender) {
        updatedprofile.gender = gender;
    }
    if (blood_groop) {
        updatedprofile.blood_groop = blood_groop;
    }
    if (age) {
        updatedprofile.age = age;
    }
    if (basic_history) {
        updatedprofile.basic_history = basic_history;
    }

    let user = await Patient.findById(req.user.id);
    if (!user) {
        return res.status(404).send("Not Found");
    }

    user = await Patient.findByIdAndUpdate(
        req.user.id,
        { $set: updatedprofile },
        { new: true }
    ).select("-password");
    res.json(user);
}
module.exports = updatepatient