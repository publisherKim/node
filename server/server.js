const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    let path = url.parse(req.url, true).pathname;
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile(__dirname + '/about.html', (err, data) => {
            if (err) console.log(err);
            res.end(data, 'utf-8');
        });
    } else if (path === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.readFile(__dirname + '/main.html', (err, data) => {
            if (err) console.log(err);
            res.end(data, 'utf-8');
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
}).listen(8080);