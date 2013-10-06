//
// Server using Node Module Express 3x, for local development.
//_____________________________________________________________\\


var express = require('../../node_modules/express'),
    path = require('../../node_modules/path'),
    app = express(),
    port = parseInt(process.env.PORT, 10) || 3000;


app.configure(function() {
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(app.router);
});

app.listen(port);

console.info("DEV ENV ->> Zaeire ->> Starting @ http://localhost:" + port + '/public...\n' + Date());