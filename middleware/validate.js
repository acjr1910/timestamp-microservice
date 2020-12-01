function validate(req, res, next) {
  const { date } = req.params;
  if (!Date.parse(date)) return res.json({ error: "Invalid Date" });

  next();
}

module.exports = validate;
