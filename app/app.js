var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hi world');
});
 
app.listen(process.env.PORT || 8000);
 
module.exports = app;
