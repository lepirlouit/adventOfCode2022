const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay06.txt');
// const contentBuffer = fs.readFileSync('./inputDay06.txt');
const content = contentBuffer.toString();

const letters = content.split('');

const nbUniques = 14;

let i = 0;
while (letters.length >= nbUniques) {
    const subarray = letters.slice(0, nbUniques);
    console.log({ subarray });
    if ([...new Set(subarray)].length === nbUniques) break;
    letters.shift();
    i++;
}
console.log(i + nbUniques);