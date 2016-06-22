'use strict';
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(`${__dirname}\\dist\\index.html`);
});

app.get('/assets/app.js', function(req, res) {
  res.sendFile(`${__dirname}\\dist\\assets\\app.js`);
});

app.listen(3000);
