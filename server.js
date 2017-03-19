var express = require('express');
var app = express();

app.post('/', function(req, res) {
  console.log(req.body); //the data on a new book
  res.send("From server route");
}); 

app.listen(3000, function() {
  console.log("listening 3000 I love scotch");
});
 