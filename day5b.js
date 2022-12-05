const fs = require('fs');
const fileContent = fs.readFileSync('./inputDay5.txt').toString();
// const fileContent = fs.readFileSync('./day5Test.txt').toString();
const lines = fileContent.split("\n");

const stacks = [];
let moves = false;

// parsing
for (const line of lines) {
    console.log(line);
    if (line.trim() === ""){
        moves = true;
        for (const stack of stacks) {
            stack.reverse();
        }
    } else if (!moves) {
        // parse stack
        const containers = line.match(/.{3}(?:\s|$)/g).map(e => e.trim());
        console.log(containers);
        for (const [index, container] of containers.entries()) {
            console.log("container : ", index, container)
            stacks[index] = stacks[index] || [];
            if (container !== "" && isNaN(container))
                stacks[index].push(container);
        }
    } else {
        const [/*match*/, howMany, from, to] = line.match(/move (\d+) from (\d+) to (\d+)/);
        console.log({ howMany, from, to })
        const temp = [];
        for (let i = 0; i < howMany; i++){
            temp.push(stacks[from-1].pop());
        }
        while(temp.length)
            stacks[to-1].push(temp.pop());
    }
}
console.table(stacks);
console.log(stacks.map(e => e[e.length - 1].split('')[1]).join(''));