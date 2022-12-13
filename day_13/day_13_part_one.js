const fs = require('fs');
// const contentBuffer = fs.readFileSync('./testDay13.txt');
const contentBuffer = fs.readFileSync('./inputDay13.txt');
const content = contentBuffer.toString();
const pairs = content.split('\n\n').map(e => e.split('\n').map(e => JSON.parse(e)));

const isNumber = (a) => Number.isInteger(a);

const compareTo = (a, b) => {
    console.log("compare", a, "and", b);
    if (a === undefined && b === undefined)
        return 0;
    if (a === undefined && b !== undefined)
        return -1;
    if (a !== undefined && b === undefined)
        return 1;
    if (isNumber(a) && isNumber(b))
        return a - b;
    if (Array.isArray(a) && isNumber(b))
        b = [b];
    if (isNumber(a) && Array.isArray(b))
        a = [a];

    if (Array.isArray(a) && Array.isArray(b)) {
        let i = 0;
        while (i < Math.max(a.length, b.length) && compareTo(a[i], b[i]) === 0) {
            i++;
        }
        return compareTo(a[i], b[i]);
    }
    throw new Error(`Could not compare (${a}) and (${b})`);
}

const enriched = pairs.map(([a, b], index) => {
    const isSort = compareTo(a, b) < 0;
    return ({
        index: index + 1,
        isSort,
    });
});

console.log(enriched.filter(e => e.isSort).map(e => e.index).reduce((acc, elt) => acc + elt));
