const express = require("express");
const bodyParser = require("body-parser");

//path config
const path = require("path");
const publicPath = path.join(__dirname, "./public");

//api endpoint
const { connect_endpoint } = require("./src/endpoints");

const { PORT } = require("./src/constants");

//app config
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(publicPath));

//endpoint config
connect_endpoint(app);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
