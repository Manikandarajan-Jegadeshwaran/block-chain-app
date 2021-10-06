const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000;
const { save_lottery_info } = require("./models/lotter_info");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Hi", req.params);
  res.send("Hi");
});

app.post("/", async (req, res) => {
  const email = req.body.email;
  const amount = req.body.amount;

  if (amount < 1) {
    const errorInfo = {
      error: true,
      message: "Amount should be greater than 0",
    };
    return res.send(errorInfo);
  }

  const result = await save_lottery_info({ email, amount });
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
