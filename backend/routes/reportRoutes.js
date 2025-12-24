const express = require("express");
const router = express.Router();
const studentReport = require("../data/studentData");

router.get("/report", (req, res) => {
  res.json(studentReport);
});

module.exports = router;
