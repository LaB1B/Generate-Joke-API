const express = require("express")
const router = express.Router()
const Jokes = require("../data/data.js");

router.get("/api/jokes", (req, res) => {
  res.send(Jokes.jokes);
});

router.get("/api/jokes/random", (req, res) => {
  let jokes = Jokes.jokes;
  if (req.query.type == "programming") {
    jokes = Jokes.jokes.filter((F) => F.type === "programming");
  }

  let Random_joke = jokes[parseInt(Math.random() * jokes.length)];
  res.send(Random_joke);
});


module.exports = router