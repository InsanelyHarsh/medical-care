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
const updatedoctor = require("./doctor/updateDoctor");
const JWT_SECRET = "helloworld";


router.put("/updatedoctor/:id", fetchuser, updatedoctor);

module.exports = router