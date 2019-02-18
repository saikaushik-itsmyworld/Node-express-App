var express = require('express');
var app = express();
var path = require("path");

// Setup View Engines
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Serve files from your "public" directory
app.use('/public', express.static(path.join(__dirname + 'public')));

// Serve files from your "bower_components" directory
app.use('/bower_components', express.static(path.join(__dirname + '/bower_components')));

app.get('/', function(req, res) {
return res.render('index');
//_dirname : It will resolve to your project folder
});
app.listen(1337, function() {
    console.log('ready on port 1337');
});

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'content-Type': 'text/plain'});
//     res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('server running at http://127.0.0.1:1337/');