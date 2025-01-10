var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('YAHOO!');
});

app.get('/shiva', function (req, res) {
  res.send('Production Engineer!');
});

app.listen(3000, function () {
  console.log('Listen success on 3000');
});
