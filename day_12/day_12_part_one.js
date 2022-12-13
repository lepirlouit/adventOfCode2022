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

const pointToKey = (point) => `${point.x}_${point.y}`;
const keyToPoint = (key) => ({ x: Number(key.split('_')[0]), y: Number(key.split('_')[1]) });

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

const findShortest = (start) => {

    const distances = {};
    const visited_nodes = new Set();
    const infinity = 1000000000;


    const getHeightAt = (point) => field[point.y][point.x];

    const canMoveFrom = (here, there) => {
        if (there.x < 0 || there.y < 0 || there.x >= field[0].length || there.y >= field.length)
            return false;
        const heightHere = getHeightAt(here);
        const heightThere = getHeightAt(there);
        if ((heightThere - 1) > heightHere)
            return false;
        return true;
    }

    const getPossibleNext = (here) => {
        const posibleNext = [];
        // if left is possible
        if (canMoveFrom(here, { x: here.x - 1, y: here.y }))
            posibleNext.push({ x: here.x - 1, y: here.y });
        // if right is possible
        if (canMoveFrom(here, { x: here.x + 1, y: here.y }))
            posibleNext.push({ x: here.x + 1, y: here.y });
        // if up is possible
        if (canMoveFrom(here, { x: here.x, y: here.y - 1 }))
            posibleNext.push({ x: here.x, y: here.y - 1 });
        // if down is possible
        if (canMoveFrom(here, { x: here.x, y: here.y + 1 }))
            posibleNext.push({ x: here.x, y: here.y + 1 });
        // console.log({ posibleNext });
        return posibleNext;
    }



    const end = findLocation('E');


    for (let i = 0; i < fieldLetters.length; i++) {
        const line = fieldLetters[i];
        for (let j = 0; j < line.length; j++) {
            distances[pointToKey({ x: j, y: i })] = infinity;
        }
    }

    distances[pointToKey(start)] = 0;

    let currentPoint = start;

    // having visitedParents
    const sett = new Set()
    while (true) {
        //checking the distance from node 0
        const nextMoves = getPossibleNext(currentPoint);
        visited_nodes.add(pointToKey(currentPoint));
        for (move of nextMoves) {
            if (visited_nodes.has(pointToKey(move)))
                continue;
            sett.add(pointToKey(move));
            const alt = distances[pointToKey(currentPoint)] + 1;
            if (alt < distances[pointToKey(move)])
                distances[pointToKey(move)] = alt;
        }
        if (sett.has(pointToKey(currentPoint)))
            sett.delete(pointToKey(currentPoint));
        if (sett.size === 0)
            break;
        let minDist = infinity;
        let indexOfMin = start;
        for (const a of sett)
            if (distances[a] < minDist) {
                minDist = distances[a];
                indexOfMin = a;
            }
        currentPoint = keyToPoint(indexOfMin);
    }

    console.log(distances[pointToKey(end)]);
    return distances[pointToKey(end)];
}

const start = findLocation('S');
console.log(findShortest(start));