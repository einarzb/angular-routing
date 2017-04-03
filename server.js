var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));


//when you dont have routes it helps to not have refresher bug
app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
});


app.listen(3000, function() {
  console.log("listening 3000 Go Green Electric");
});
