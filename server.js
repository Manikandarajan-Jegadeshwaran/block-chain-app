const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Hi", req.params);
  res.send("Hi");
});

app.post("/", (req, res) => {
  const email = req.body.email;
  res.send({ email: email });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
