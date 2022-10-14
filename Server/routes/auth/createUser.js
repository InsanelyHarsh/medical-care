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
const JWT_SECRET = "helloworld";


//validating input got by server, if input is in correct format, then user is created.
//if any error is there, the return bas request and all the errrors.
const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // checking if user with same email already exists or not
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res
                .status(400)
                .json({ error: "Sorry, user already exist with this email" });
        }
        // if user is aleardy not exist, then create  a new user
        const salt = await bcrypt.genSalt(10);

        const secpass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass,
            isDoctor: req.body.isDoctor,
        });

        // console.log(req.body.isDoctor);

        if (user.isDoctor) {
            let doctor = await Doctor.create({
                name: req.body.name,
                email: req.body.email,
                password: secpass,
                isDoctor: req.body.isDoctor,
            });
            const data = {
                doctor: {
                    id: doctor.id,
                },
            };
            const authtoken = jwt.sign(data, JWT_SECRET);
            res.json({ authtoken });
        } else {
            let patient = await Patient.create({
                name: req.body.name,
                email: req.body.email,
                password: secpass,
                isDoctor: req.body.isDoctor,
            });
            const data = {
                patient: {
                    id: patient.id,
                },
            };
            const authtoken = jwt.sign(data, JWT_SECRET);
            res.json({ authtoken });
        }

        // const data = {
        //   user: {
        //     id: user.id,
        //   },
        // };
        // const authtoken = jwt.sign(data, JWT_SECRET);

        // res.json({ authtoken });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error!!!");
    }
}

module.exports = createUser;