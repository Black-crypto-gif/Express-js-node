const { readFile } = require('fs');

console.log('Starting app.js');
//CHECK FILE PATH ::

readFile('./content/first.txt','utf-8',(err, result) => {
    if (err) {
        console.log('Error reading file');
        return;
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');