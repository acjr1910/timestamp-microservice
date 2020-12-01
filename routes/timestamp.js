const express = require("express");
const router = express.Router();
const validateTimestamp = require("../middleware/validateTimestamp");

router.get("/", (req, res) => {
  const unix = Date.parse(new Date());
  const utc = new Date().toUTCString();

  res.json({ unix, utc });
});

router.get("/:date", validateTimestamp, (req, res) => {
  const { isUtc } = req;
  const { date } = req.params;

  const unix = isUtc ? Date.parse(date) : Number(date);
  const utc = new Date(isUtc ? date : Number(date)).toUTCString();

  res.json({ unix, utc });
});

module.exports = router;
