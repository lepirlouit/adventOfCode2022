const fs = require('fs');
const fileContent = fs.readFileSync('./inputDay2.txt');
// const fileContent = fs.readFileSync('./day2Test.txt');

const games = fileContent.toString().split("\n");

const scores = games.map(line => {
    const [you, me] = line.split(" ");
    return (me === "X"?1 : me ==="Y"?2:3) 
        + 
        (((you === "A" && me === "X") || (you === "B" && me === "Y") || (you === "C" && me === "Z")) ? 3 :
        (((you === "A" && me === "Y") || (you === "B" && me === "Z") || (you === "C" && me === "X")) ?6:0))
});

console.log(scores.reduce((acc, elt) => acc + elt));