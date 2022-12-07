const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay04.txt');
// const contentBuffer = fs.readFileSync('./inputDay04.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

const isPairIncluded = (a, b) =>
    (a.start >= b.start && a.end <= b.end) ||
    (b.start >= a.start && b.end <= a.end);

console.log(isPairIncluded({ start: 5, end }, {}))
