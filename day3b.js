const fs = require('fs');
const fileContent = fs.readFileSync('./inputDay3.txt');
// const fileContent = fs.readFileSync('./day3Test.txt');

const lines = fileContent.toString().split("\n");

function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
        yield arr.slice(i, i + n);
    }
}
const groups = [...chunks(lines, 3)]

// const compartiments = lines.map(line => [line.substring(0, line.length / 2), line.substring(line.length / 2),]);

const getCommon = (a, b, c) => { 
    const aLetters = a.split('');
    const bLetters = b.split('');
    const cLetters = c.split('');
    return aLetters.find(a => bLetters.includes(a) && cLetters.includes(a));
}

const count = (letter, a, b, c) => {
    const lettters = [...a.split(''), ...b.split(''), ...c.split('')];
    return lettters.filter(l => l === letter).length;
    
}

const letterValue = (letter) => {
    const charcode = letter.charCodeAt(0);
    if (charcode > 90)
        return charcode - 96;
    return charcode - 64 +26;
}

const commonLEtters = groups.map(([a, b, c]) => letterValue(getCommon(a,b , c)));

// const letterValues = commonLEtters.map(letterValue);

console.log(commonLEtters.reduce((acc, elt) => acc + elt));
// console.log(commonLEtters);