var express = require('express');
var fs = require('fs');

// Get contents of index.html
var contents = fs.readFileSync('index.html');
//console.log('Contents of index.html:' + contents.toString('utf-8'));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(contents.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
