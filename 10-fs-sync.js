const {
    readFileSync,
    writeFileSync
} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');



writeFileSync('./content/merged.txt', `here is the rsult : ${first},${second}`, {
    flag: 'a'
});

console.log('done');
console.log('start the new things');