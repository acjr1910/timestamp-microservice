function validateTimestamp(req, res, next) {
  const { date } = req.params;

  const isUtcTimestamp = isNaN(Number(date));
  const isInvalidDate = isUtcTimestamp
    ? isNaN(Date.parse(date))
    : isNaN(new Date(Number(date)).getDate());

  if (isInvalidDate) return res.json({ error: "Invalid Date" });

  req.isUtc = isUtcTimestamp;

  next();
}

module.exports = validateTimestamp;
