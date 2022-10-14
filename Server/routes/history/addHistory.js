const express = require("express");
const Doctor = require("../../models/Doctor");
const User = require("../../models/User");
const Patient = require("../../models/Patient");
const History = require("../../models/history")
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
const updatedpatient = require("./patient/updatePatient")
const JWT_SECRET = "helloworld";


const addHistory = async (req, res) => {
    try {
        console.log("reached /addhistory");
        const errors = validationResult(req);
        const {
            problem,
            description,
            duration,
            treatment,
            medicines_given,
            patient_id,
        } = req.body;
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const history = new History({
            patient_id,
            problem,
            description,
            duration,
            treatment,
            medicines_given: medicines_given.split(","),
            user: req.user.id,
        });
        const savedHistory = await history.save();
        res.json(savedHistory);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error!!!");
    }
}
module.exports = addHistory