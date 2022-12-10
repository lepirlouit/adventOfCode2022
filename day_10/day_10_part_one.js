const fs = require('fs');
// const contentBuffer = fs.readFileSync('./testDay10.txt');
const contentBuffer = fs.readFileSync('./inputDay10.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');


const registers = {
    X: 1,
    counter: 0,
}

const execNoop = () => {
    registers.counter++;
}

const execAddx = (V) => {
    registers.counter++;
    registers.counter++;
    registers.X += V;
}

const checCycles = [20, 60, 100, 140, 180, 220];
let total = 0;
for (const cycle of checCycles) {
    console.log({ cycle });
    while (registers.counter < checCycles[checCycles.length - 1] && registers.counter < cycle) {
        const line = lines.shift();
        // console.log(line);
        // console.log({ line, counter: registers.counter, cycle });
        if (line.match(/^noop$/)) {
            if (registers.counter + 1 >= cycle) {
                console.log({ cycle, registers, force: cycle * registers.X });
                total += cycle * registers.X;
            }
            execNoop();
        } else {
            if (registers.counter + 2 >= cycle) {
                console.log({ cycle, registers, force: cycle * registers.X });
                total += cycle * registers.X;
            }
            const [, valStr] = line.match(/^addx (-?\d*)/);
            execAddx(Number(valStr));
        }
    }
}
console.log({ total });