var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cats = require('./routes/katz.js');

app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/cats',cats);
//routes the request for /cats to the routers folder


// serve static files
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('server is running on port ', app.get('port'));
});
