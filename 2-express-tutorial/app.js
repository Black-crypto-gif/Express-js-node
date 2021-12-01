const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})
app.get('/about', (req, res) => {
    res.status(200).send('About Us');
    console.log('About Us');
})

app.all('*',(req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
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