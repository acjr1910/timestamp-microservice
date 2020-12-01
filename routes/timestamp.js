const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("send current date in unix and utc");
});

router.get("/:timestamp", (req, res) => {
  res.send("send timestamp");
});

module.exports = router;
