var http = require('http');
var server = http.createServer( function(req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('Response' + req.url);
    console.log('Hi!');
});

server.listen(5000);
console.log('Executing server Node.js');