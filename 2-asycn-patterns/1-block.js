const http = require('http');


const server = http.createServer((req, res) => {
  if(req.url === '/'){
      res.end('home page')
      // blocking code !!!
      for(let i = 0; i < 55; i++){
        for(let j = 0; j < 55; j++){
          console.log(`${i} ${j}`);
        }
          
      }
  }
  if(req.url === '/about'){
      res.end('about page')
  }
    if(req.url === '/contact'){
      res.end('contact page')
  }
});

server.listen(8080, () => {
    console.log('Server is up on port 8080');
});