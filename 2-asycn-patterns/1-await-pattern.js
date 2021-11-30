const { readFile, writeFile } = require('fs').promises
/* const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile); */

const start = async () => {
    try {
        const text = await readFile('./content/first.txt', 'utf8');
        const text2 = await writeFile('./content/second.txt', text);
        await writeFilePromise('./content/third.txt', `THIS IS AWESOME:${first} ${second}`, { flag: 'a' });
        console.log(first,second);
        
    } catch (err) {
        console.log(err);
    }

}
start();
/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path,'utf8' ,(err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
} */

/* getText('./content/first.txt').then(result => console.log(result) 
).catch(err => console.log(err)); */

