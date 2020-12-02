const express = require("express");
const app = express();
const timestamp = require("./routes/timestamp");

app.use(express.static("public"));
app.use("/api/timestamp", timestamp);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
