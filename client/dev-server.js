//______________________<{ DEV - WEB SERVER }>______________________\\

var express = require('express'),
    server = express();

var port = process.env.PORT || 3000;
var cache = 86400000; // set site cache to max 1 day

// logs req, res to console
server.use(express.logger());

// compress response data - gzip
server.use(express.compress());

// middleware, supporting JSON, urlEncoded
// multipart requests.
server.use(express.bodyParser());

// allows use of DELETE & PUT 
server.use(express.methodOverride());

// present static content
server.use(express.static(__dirname + '/default', {
    maxAge: cache
}));

// sets route manager
server.use(server.router);

// Set server to listen at port
server.listen(port);

console.info('<{ DEV - WEB-SERVER }> started @ port: ' + port);