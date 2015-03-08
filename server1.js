var express = require("express")
var app = express();

var celebs = {
"celeb1": {
  "profession": "star",
  "known_for": ["reality television show", "drama"],
  "gender": "female",
  "first letter of first name": "k",
  "extra hint": "mrs. west"
},

}

app.get("/", function(req, res) {
    res.json({"results": celebs.celeb1})
});

app.get("/:input", function(req,res) {
  var request = req.params.input.toLowerCase();
  console.log(request)
  if (request === "celeb_1") {
    res.send({correct:"you win!"})
  } else {
    res.send({incorrect:"try again"})
  }
})

app.listen(3000);
console.log("listening on port 3000!")
