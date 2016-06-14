
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var index = require('../modules/index');
var calculate = require('../modules/calculate');


// Set port number to 3000
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/calculator', calculate);
app.use('/', index);

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
