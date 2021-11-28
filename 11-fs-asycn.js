const { readFile, writeFile } = require('fs');
console.log('Before');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
        const second = result;
        writeFile('./content/merged2.txt', `here is the rsult : ${first},${second}`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('done with this task');
            }
        });
    });
});

console.log('After');