//______________________<{ DEV - WEB SERVER }>______________________\\

var express = require('../../node_modules/express'),
    app = express.createServer();



app.get('/', function(req, res) {

    res.send("Hello World");
});

app.listen();
console.info('<{ DEV - WEB-SERVER }> started @ port %s', app.address().port);