const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay02.txt');
// const contentBuffer = fs.readFileSync('./inputDay02.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

const scores = lines.map(line => {
    const [you, me] = line.split(" ");
    return (me === "X" ? 1 : me === "Y" ? 2 : 3)
        +
        (((you === "A" && me === "X") || (you === "B" && me === "Y") || (you === "C" && me === "Z")) ? 3 :
            (((you === "A" && me === "Y") || (you === "B" && me === "Z") || (you === "C" && me === "X")) ? 6 : 0))
});

console.log(scores.reduce((acc, elt) => acc + elt));