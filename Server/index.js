require("./db/config");
const express = require("express");
const User = require("./db/User");

const app = express();
app.use(express.json());

const Jwt = require("jsonwebtoken");
const jwtKey = "shubham";

const cors = require("cors");
app.use(cors());

app.post("/signin", async (req, res) => {
  if (req.body.Password && req.body.Email) {
    let person = await User.findOne(req.body).select("-Password");
    if (person) {
      Jwt.sign({ person }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send({ result: "NO user Found!!" });
        }
        res.send({ person, auth: token });
      });
    } else {
      res.send({ result: "No User Found!!" });
    }
  }
});

app.post("/signup", async (req, res) => {

  let person = new User(req.body);
  let result = await person.save();

  result = result.toObject();

  delete result.Password;

  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      res.send({ result: "No user Found !!" });
    }
    res.send({ result, auth: token });
  });
});

app.listen(3000, () => {
  console.log("listing to port 3000");
});
