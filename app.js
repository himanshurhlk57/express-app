const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello from app.js");
});

app.listen(port, (req, res) => {
  console.log(`app is listening at port ${port}`);
});
