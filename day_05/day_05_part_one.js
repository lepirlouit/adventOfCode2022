const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay05.txt');
// const contentBuffer = fs.readFileSync('./inputDay05.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

const stacks = [];
let moves = false;

// parsing
for (const line of lines) {
    console.log(line);
    if (line.trim() === "") {
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
        for (let i = 0; i < howMany; i++) {
            const temp = stacks[from - 1].pop();
            stacks[to - 1].push(temp);
        }
    }
}

console.log(stacks.map(e => e[e.length - 1].split('')[1]).join(''));