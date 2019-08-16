var http = require('http');
var fs = require('fs');
var html = fs.readFileSync('index.html');
var page404 = fs.readFileSync('404.html');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
            response.end(html);
    } else {
            response.statusCode = 404;
            response.end(page404);
    }
});

server.listen(8080);
