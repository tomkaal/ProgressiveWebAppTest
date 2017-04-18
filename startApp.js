// var express = require('express');
// var app = express();
// var path = require('path');
//
// //app.use(express.static(__dirname)); // Current directory is root
// app.use(express.static(path.join(__dirname, '/'))); //  "public" off of current is root
//
// app.listen(8002);
// console.log('Listening on port 8002');

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/host.key', 'utf8');
var certificate = fs.readFileSync('sslcert/host.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
var path = require('path');


// your express configuration here
app.use(express.static(path.join(__dirname, '/'))); //  "public" off of current is root


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);