const fs = require('fs');
const fileContent = fs.readFileSync('./inputDay4.txt').toString();
// const fileContent = fs.readFileSync('./day4Test.txt').toString();

const lines = fileContent.split("\n");

const pairs = lines.map(line => line.split(',').map(e => { 
    const [start, end] = e.split('-').map(Number);
    return ({start, end});
}))


// const isPairIncluded = (a, b) =>
//     (a.start >= b.start && a.end <= b.end) ||
//     (b.start >= a.start && b.end <= a.end);

const isPairOverlap = (a, b) =>
    (a.start <= b.start && b.start <= a.end) ||
    (b.start <= a.start && a.start <= b.end);



// console.log(isPairIncluded({start:5, end}, {}))
console.table(pairs.filter(([a,b]) => isPairOverlap(a,b)));