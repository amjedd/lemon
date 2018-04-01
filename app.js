var express = require('express');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');
var path = require('path');

var db = require('./db');

// our routers
var driversRouter = require('./routes/drivers');

// instantiate an instance of an express server
var app = express();

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// API routers to serve up data from the server
app.use('/drivers', driversRouter);

app.use('*', function(req, res) {
   res.send('this is my default route');
 });


// actually start the server
var server = app.listen(3000, function() {
  console.log('Server operating and listening on port', server.address().port, '...');
  db.sync({force: false})
    .then(message => {
      console.log('...and db is synced!');
    })
    .catch(function(err) {
      throw err;
    });
});
