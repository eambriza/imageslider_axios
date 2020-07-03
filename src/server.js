const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const data = require("./data");

app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
  res.send(data);
});
