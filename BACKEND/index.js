const express = require("express");
const cors = require("cors");

require("./DB/config.js");
const userConfig = require("./DB/Users.js");
const Users = require("./DB/Users.js");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("api working");
});
app.post("/register", async (req, res) => {
  let user = new userConfig(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
    let user = Users.findOne(req.body);
    res.send(user);
});

app.listen(8200);
