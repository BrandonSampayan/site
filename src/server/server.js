var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader(`Access-Control-Allow-Origin`, `http://localhost:8000`);
    res.setHeader(`Access-Control-Allow-Methods`, `GET, POST, OPTIONS, PUT, PATCH, DELETE`);
    res.setHeader(`Access-Control-Allow-Headers`, `X-Requested-With,content-type`);
    res.setHeader(`Access-Control-Allow-Credentials`, true);
    next();
});

app.post(`/api/contact`, (req, res) => {
  // TODO: Return a promise and have front-end act accordingly
  var transporter = nodemailer.createTransport({
    service: `Gmail`,
    auth: {
      user: `GEN_CHURCH_USERNAME`,
      pass: `GEN_CHURCH_PASSWORD`
    }
  });

  var mailOptions = {
    from: `Generation Church <GEN_CHURCH_EMAIL>`,
    to: `GEN_CHURCH_EMAIL`,
    subject: `You got some mail`,
    html: `<h3>Here's what they said:</h3><ul><li>${req.body.name}</li><li>${req.body.subject}</li><li>${req.body.message}</li></ul>`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({error: error});
    } else {
      res.json({info: info});
    }
  });
});

app.listen(3000);
