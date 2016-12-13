var express = require('express');
var app = express();
var path = require('path');

var routes = require('./api/routes');

var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', routes);

var server = app.listen(PORT, function(req, res) {
  console.log("The app is listening on port: " + PORT);
});

