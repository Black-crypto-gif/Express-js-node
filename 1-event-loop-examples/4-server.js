const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('hello fethi mellal');
})

server.listen(8080, () => {
    console.log('server is listening on port 8080');
});