//______________________<{ DEV - HTTP WEB SERVER }>______________________\\

var express = require('express'),
    fs = require('fs'),
    server = express();

var port = process.env.PORT || 3000;
var cache = 86400000; // set site cache to max 1 day


var logFile = fs.createWriteStream('./dev.log', {
    flags: 'w'
}); //use {flags: 'w'} to open in write mod


//_________________<{ DEV CONFIGURATION }>_________________\\

server.configure('development', function() {

    server.use(express.bodyParser()); // middleware, supporting JSON, urlEncoded, multipart requests.
    server.use(express.methodOverride()); // allows use of DELETE & PUT 
    server.use(server.router); // sets route manager
    server.use(express.logger({
        stream: logFile
    }));
    // error handling
    server.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
    // present static content
    server.use(express.static(__dirname + '/default'));
});
//__________________________________________________________\\


//_______________<{ PRODUCTION CONFIGURATION }>______________\\

// server.configure('production', function() {
//     server.use(express.logger({stream: logFile})); // logs req, res to console
//     server.use(express.compress()); // compress response data - gzip
//     server.use(express.bodyParser()); // middleware, supporting JSON, urlEncoded, multipart requests.
//     server.use(express.methodOverride()); // allows use of DELETE & PUT 
//     server.use(server.router); // sets route manager

//     // error handling
//     server.use(express.errorHandler());
//     // present static content
//     server.use(express.static(__dirname + '/default', {
//         maxAge: cache
//     }));
// });
//__________________________________________________________\\

// Set server to listen at port
server.listen(port);

console.info('<{ DEV - WEB-SERVER }> started @ port: ' + port + ' : ' + Date());