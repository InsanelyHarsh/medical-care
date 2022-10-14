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


const updatedoctor = async (req, res) => {
    // DocId,experience,speciality,timing,description,awards, membership
    const {
        DocId,
        experience,
        speciality,
        timing,
        description,
        awards,
        membership,
    } = req.body;

    const updatedprofile = {};
    if (DocId) {
        updatedprofile.DocId = DocId;
    }
    if (experience) {
        updatedprofile.experience = experience;
    }
    if (speciality) {
        updatedprofile.speciality = speciality;
    }
    if (timing) {
        updatedprofile.timing = timing;
    }
    if (description) {
        updatedprofile.description = description;
    }
    if (awards) {
        updatedprofile.awards = awards;
    }
    if (membership) {
        updatedprofile.membership = membership;
    }

    let user = await Doctor.findById(req.user.id);
    if (!user) {
        return res.status(404).send("Not Found");
    }

    user = await Doctor.findByIdAndUpdate(
        req.user.id,
        { $set: updatedprofile },
        { new: true }
    ).select("-password");
    res.json(user);
}

module.exports = updatedoctor