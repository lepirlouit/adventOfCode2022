const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay02.txt');
// const contentBuffer = fs.readFileSync('./inputDay02.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');


const sameAsYou = (you) => {
    if (you === "A")
        return "X";
    if (you === "B")
        return "Y";
    if (you === "C")
        return "Z";
}
const toWinYou = (you) => {
    if (you === "A")
        return "Y";
    if (you === "B")
        return "Z";
    if (you === "C")
        return "X";
}
const toLoseYou = (you) => {
    if (you === "A")
        return "Z";
    if (you === "B")
        return "X";
    if (you === "C")
        return "Y";
}

const scores = lines.map(line => {
    const [you, advise] = line.split(" ");
    const me = (advise === "Y") ? sameAsYou(you) : (advise === "X") ? toLoseYou(you) : toWinYou(you);
    return (me === "X" ? 1 : me === "Y" ? 2 : 3)
        +
        (((you === "A" && me === "X") || (you === "B" && me === "Y") || (you === "C" && me === "Z")) ? 3 :
            (((you === "A" && me === "Y") || (you === "B" && me === "Z") || (you === "C" && me === "X")) ? 6 : 0))
});

console.log(scores.reduce((acc, elt) => acc + elt));