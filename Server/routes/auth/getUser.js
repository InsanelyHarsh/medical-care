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
const JWT_SECRET = "helloworld";

//validating input got by server, if input is in correct format, then user is created.
//if any error is there, the return bas request and all the errrors.
const getUser = async (req, res) => {
    try {
        const userId = req.user.id;
        let user = await Doctor.findById(userId).select("-password");
        if (!user) {
            user = await Patient.findById(userId).select("-password");
            res.send(user);
        } else {
            res.send(user);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error!!!");
    }
}

module.exports = getUser