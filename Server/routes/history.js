const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/Fetchuser");
const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");
const History = require("../Models/history");
const addHistory = require("./history/addHistory");

//ROUTE 1: Add a new histry using POST : "/api/auth/addhistory"
router.post(
  "/addhistory",
  fetchuser,
  [
    body("problem", "Enter a valid problem").isLength({ min: 1 }),
    body("description", "description must be of min 3 letters").isLength({
      min: 3,
    }),
  ],
  addHistory
);
//ROUTE 2: fetching all histories with paient_id using GET : "/api/history/allhistory/:patient_id"
router.get(
  "/allhistory",
  fetchuser,
  [body("patient_id", "Enter a valid patient id").isLength({ min: 5 })],
  
  allHistory
);

module.exports = router;
