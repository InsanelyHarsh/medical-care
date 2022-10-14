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
const JWT_SECRET = "helloworld";

//validating input got by server, if input is in correct format, then user is created.
//if any error is there, the return bas request and all the errrors.
const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await Doctor.findOne({ email: req.body.email });
        let password_compare = null;
        if (user) {
            password_compare = await bcrypt.compare(password, user.password);
        }

        if (!user || !password_compare) {
            user = await Patient.findOne({ email: req.body.email });
            password_compare = await bcrypt.compare(password, user.password);
            if (!user) {
                return res
                    .status(400)
                    .json({ error: "please, try to login with correct credentials" });
            }
            if (!password_compare) {
                return res
                    .status(400)
                    .json({ error: "please, try to login with correct credentials" });
            }
            const data = {
                user: {
                    id: user.id,
                },
            };
            const authtoken = jwt.sign(data, JWT_SECRET);
            res.send({ authtoken });
        } else {
            const data = {
                user: {
                    id: user.id,
                },
            };
            const authtoken = jwt.sign(data, JWT_SECRET);
            res.send({ authtoken });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error!!!");
    }
}

module.exports = loginUser