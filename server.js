const express = require("express");
const app = express();
const timestamp = require("./routes/timestamp");

var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));
app.use("/api/timestamp", timestamp);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
