const express = require('express');
const path = require('path');
const app = express();

//setup static middleware : to serve static files:

app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
})

app.listen(8080,()=>{
    console.log("server is running");
})



//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen