const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/Fetchuser");
const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");
const { route } = require("./history");

router.post(
    "/addhospital",
    fetchuser,
    [
      body("problem", "Enter a valid problem").isLength({ min: 1 }),
      body("description", "description must be of min 3 letters").isLength({
        min: 3,
      }),
    ],
    async (req, res) => {
      try {
        console.log("reached /addhospital");
        const errors = validationResult(req);
       const{name} = req.body
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
  );

module.exports = router;
