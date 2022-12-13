const fs = require('fs');
// const contentBuffer = fs.readFileSync('./testDay12.txt');
// const contentBuffer = fs.readFileSync('./simpleTestDay12.txt');
const contentBuffer = fs.readFileSync('./inputDay12.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

const fieldLetters = lines.map(e => e.split(''));

const field = fieldLetters.map(line => line.map(e => {
    if (e === "S")
        return 0;
    if (e === "E")
        return 25;
    return e.charCodeAt(0) - 'a'.charCodeAt(0);
}));


const findLocation = (letter) => {
    for (let i = 0; i < fieldLetters.length; i++) {
        const line = fieldLetters[i];
        for (let j = 0; j < line.length; j++) {
            const fElt = line[j];
            if (fElt === letter)
                return ({ x: j, y: i });
        }

    }
}

const start = findLocation('S');
const end = findLocation('E');

// console.log({ start, end });

const includesPoint = (array, point) => array.find(e => e.x === point.x && e.y === point.y)

const addCloneIfNotExist = (array, point) => {
    if (!includesPoint(array, point))
        array.push({ x: point.x, y: point.y });
}


const getHeightAt = (point) => field[point.y][point.x];
const getLetterAt = (point) => fieldLetters[point.y][point.x];

const canMoveFrom = (path, here, there) => {
    if (there.x < 0 || there.y < 0 || there.x >= field[0].length || there.y >= field.length)
        return false;
    if (includesPoint(path, there))
        return false;
    const heightHere = getHeightAt(here);
    const heightThere = getHeightAt(there);
    if ((heightThere - 1) > heightHere)
        return false;
    return true;
}

const getPossibleNext = (path, here) => {
    const posibleNext = [];
    // if left is possible
    if (canMoveFrom(path, here, { x: here.x - 1, y: here.y }))
        posibleNext.push({ x: here.x - 1, y: here.y });
    // if right is possible
    if (canMoveFrom(path, here, { x: here.x + 1, y: here.y }))
        posibleNext.push({ x: here.x + 1, y: here.y });
    // if up is possible
    if (canMoveFrom(path, here, { x: here.x, y: here.y - 1 }))
        posibleNext.push({ x: here.x, y: here.y - 1 });
    // if down is possible
    if (canMoveFrom(path, here, { x: here.x, y: here.y + 1 }))
        posibleNext.push({ x: here.x, y: here.y + 1 });
    // console.log({ posibleNext });
    return posibleNext;
}

let currentShortest = 1024;

const computePath = (path) => {
    if (path.length > currentShortest)
        return 0;
    const lastLocation = path[path.length - 1];
    const letterAtEnd = getLetterAt(lastLocation);
    if (letterAtEnd !== 'E') {
        const possibleNext = getPossibleNext(path, lastLocation);
        const sizes = possibleNext.map(next => {
            // if (lastLocation.x === 0 && lastLocation.y === 1)
            // console.log({ path, possibleNext });
            const result = computePath([...path, next]);
            return result;
        });
        // console.log({ possibleNext, sizes });
        return sizes.filter(e => e).sort((a, b) => a - b).shift();

    }
    currentShortest = path.length;
    console.log({ currentShortest });
    return path.length;
}

const computedPath = computePath([start]);
console.log(computedPath - 1);

// console.log(computedPath.length);

console.table(field);


//{}[]