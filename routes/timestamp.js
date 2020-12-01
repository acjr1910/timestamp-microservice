const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");

router.get("/", (req, res) => {
  res.send("send current date in unix and utc");
});

router.get("/:date", validate, (req, res) => {
  const { date } = req.params;
  res.json({ unix: Date.parse(date), utc: new Date(date).toUTCString() });
});

module.exports = router;
