const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay03.txt');
// const contentBuffer = fs.readFileSync('./inputDay03.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

const compartiments = lines.map(line => [line.substring(0, line.length / 2), line.substring(line.length / 2),]);

const getCommon = (a, b) => {
    const aLetters = a.split('');
    const bLetters = b.split('');
    return aLetters.find(a => bLetters.includes(a));
}

const commonLEtters = compartiments.map(([a, b]) => getCommon(a, b));

const letterValue = (letter) => {
    const charcode = letter.charCodeAt(0);
    if (charcode > 90)
        return charcode - 96;
    return charcode - 64 + 26;
}

const letterValues = commonLEtters.map(letterValue);

console.log(letterValues.reduce((acc, elt) => acc + elt));