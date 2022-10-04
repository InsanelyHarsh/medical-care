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
  //validating input got by server, if input is in correct format, then user is created.
  //if any error is there, the return bas request and all the errrors.
  async (req, res) => {
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
);

// ROUTE 2: Logging in  a user using POST : "/api/auth/login"
// No LOGIN required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "password can not be blanked.").exists(),
  ],
  //validating input got by server, if input is in correct format, then user is created.
  //if any error is there, the return bas request and all the errrors.
  async (req, res) => {
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
);

// ROUTE 3: getting details of a loggedin user using POST: "api/auth/getuser".
// Login Required
router.post(
  "/getuser",
  fetchuser,
  //validating input got by server, if input is in correct format, then user is created.
  //if any error is there, the return bas request and all the errrors.
  async (req, res) => {
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
);

router.put("/updatedoctor/:id", fetchuser, async (req, res) => {
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
});

router.put("/updatepatient/:id", fetchuser, async (req, res) => {
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
});

module.exports = router;
