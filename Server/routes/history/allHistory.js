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
const updatedpatient = require("./patient/updatePatient")
const JWT_SECRET = "helloworld";


const allHistory = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { patient_id } = req.body;
        history = [];
        history = await History.find({ patient_id: patient_id });
        res.json(history);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error!!!");
    }
}
module.exports = allHistory