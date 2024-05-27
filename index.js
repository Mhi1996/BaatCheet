const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
const db_Connection = require("./src/config/db_Connection");
const dotenv = require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const route = require("./src/User/routes/user.routes");

app.use(helmet());
app.use(cors());
db_Connection();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(route);

app.use("/", (req, res) => {
  res.status(200).json({ msg: "Hello from Baatcheet" });
});

app.listen("3333", () => {
  console.log(`BaatCheet server is running on port 3333`);
});

module.exports = app;
