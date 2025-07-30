const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to my first node server');
});

server.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
});