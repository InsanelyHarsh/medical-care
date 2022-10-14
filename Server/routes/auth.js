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
// ROUTE 1: creating a user using POST : "/api/auth/createuser"
// No LOGIN required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "password must be of minimum 5 characters").isLength({
      min: 5,
    }),
  ],
  createUser
);

// ROUTE 2: Logging in  a user using POST : "/api/auth/login"
// No LOGIN required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "password can not be blanked.").exists(),
  ],
  loginUser

);

// ROUTE 3: getting details of a loggedin user using POST: "api/auth/getuser".
// Login Required
router.post(
  "/getuser",
  fetchuser,
  getUser
);



module.exports = router;
