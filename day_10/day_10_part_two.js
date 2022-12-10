const fs = require('fs');
// const contentBuffer = fs.readFileSync('./testDay10.txt');
const contentBuffer = fs.readFileSync('./inputDay10.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');


const registers = {
    X: 1,
    counter: 0,
    CRT: "",
}
const updateCrt = ({ counter, X }) => {
    if (counter % 40 === X - 1 || counter % 40 === X || counter % 40 === X + 1)
        registers.CRT += "#";
    else
        registers.CRT += ".";
    console.log({ counter, crt: registers.CRT })
}

const displayCrt = () => {
    function* chunks(arr, n) {
        for (let i = 0; i < arr.length; i += n) {
            yield arr.slice(i, i + n);
        }
    }
    const a = [...chunks(registers.CRT.split(''), 40)].map(e => e.join('')).map(console.log);

}

const execNoop = () => {
    updateCrt(registers);
    registers.counter++;
}

const execAddx = (V) => {
    updateCrt(registers);
    registers.counter++;
    updateCrt(registers);
    registers.counter++;
    registers.X += V;
}

const checCycles = [20, 60, 100, 140, 180, 220, 1000];
let total = 0;
for (const cycle of checCycles) {
    console.log({ cycle });
    while (registers.counter < checCycles[checCycles.length - 1] && registers.counter < cycle && lines.length) {
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
displayCrt();