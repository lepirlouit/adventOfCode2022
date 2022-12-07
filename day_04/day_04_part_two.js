const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay04.txt');
// const contentBuffer = fs.readFileSync('./inputDay04.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

const pairs = lines.map(line => line.split(',').map(e => {
    const [start, end] = e.split('-').map(Number);
    return ({ start, end });
}))


// const isPairIncluded = (a, b) =>
//     (a.start >= b.start && a.end <= b.end) ||
//     (b.start >= a.start && b.end <= a.end);

const isPairOverlap = (a, b) =>
    (a.start <= b.start && b.start <= a.end) ||
    (b.start <= a.start && a.start <= b.end);



// console.log(isPairIncluded({start:5, end}, {}))
console.table(pairs.filter(([a, b]) => isPairOverlap(a, b)));