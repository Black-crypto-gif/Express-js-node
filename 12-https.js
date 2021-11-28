const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('welcome to our about page');
    } else {
        res.end(`
    <h1>Oops!</h1>
    <p>Page not found</p>
    <a href="/">Go to home page</a>
    `);
    }

});

server.listen(3050);