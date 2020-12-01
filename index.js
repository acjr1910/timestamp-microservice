require("dotenv").config();
const express = require("express");
const app = express();

const timestamp = require("./routes/timestamp");

app.use("/api/timestamp", timestamp);

app.get("/", (req, res) => {
  res.send("Home - Timestamp Microservice");
});

const port =
  process.env.NODE_ENV == "development"
    ? process.env.PORT_DEV
    : process.env.PORT_PROD;

app.listen(port, () => console.log(`Listening on port ${port}...`));
