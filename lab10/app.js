const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const xss = require("xss");

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: xss(req.body.message) });
});


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
