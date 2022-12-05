const fs = require('fs');
const fileContent = fs.readFileSync('./inputDay2.txt');
// const fileContent = fs.readFileSync('./day2Test.txt');

const games = fileContent.toString().split("\n");

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

const scores = games.map(line => {
    const [you, advise] = line.split(" ");
    const me = (advise === "Y") ? sameAsYou(you) : (advise === "X") ? toLoseYou(you) : toWinYou(you);
    return (me === "X"?1 : me ==="Y"?2:3) 
        + 
        (((you === "A" && me === "X") || (you === "B" && me === "Y") || (you === "C" && me === "Z")) ? 3 :
        (((you === "A" && me === "Y") || (you === "B" && me === "Z") || (you === "C" && me === "X")) ?6:0))
});

console.log(scores.reduce((acc, elt) => acc + elt));