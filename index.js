require("dotenv").config();
const express = require("express");
const app = express();

const port =
  process.env.NODE_ENV == "development"
    ? process.env.PORT_DEV
    : process.env.PORT_PROD;

app.get("/", (req, res) => {
  res.send("Hello Timestamp Microservice");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
