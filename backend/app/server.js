const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Enables CORS
var enableCORS = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept,*');

  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  };

  req.on('information', (info) => {
    console.log("response finish ",info);
  });
};

app.use(enableCORS);
// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public'));
require('./routes')(app);
require('./database');
module.exports = app;