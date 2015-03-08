var express = require("express")
var app = express();

var celebs = {
"celeb1": {
  "profession": "musician",
  "known_for": ["blues guitar", "lovey dovey pop songs"],
  "gender": "male",
  "first letter of first name": "j",
  "extra hint": "You're Body is a Wonderland"
},
"celeb2": {
  "profession": "musician",
  "known_for": ["Blue", "Dont know what you got til its gone"],
  "gender": "female",
  "first letter of first name": "J",
  "extra hint": "Big Yellow Taxi"
},
"celeb3": {
  "profession": "politician",
  "known_for": ["campaigning", "red lipstick"],
  "gender": "female",
  "first letter of first name": "h",
  "extra hint": "ms. lewinsky's arch nemesis"
},

}

var winLose = {

}

var counter = 0
var keys = Object.keys(celebs);
app.get("/", function(req, res) {
  if (counter === keys.length) {
    counter = 0
    res.json({"results": celebs[keys[counter]]})
    counter++;
  } else {
    console.log(keys);
    res.json({"results": celebs[keys[counter]]})
    counter++
  }
});

app.get("/:input", function(req,res) {
  var request = req.params.input.toLowerCase();
  console.log(request)
  // if (request === keys[counter-1])

})



app.listen(3000);
console.log("listening on port 3000!")
