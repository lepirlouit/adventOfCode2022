const fs = require('fs');
// const contentBuffer = fs.readFileSync('./testDay08.txt');
const contentBuffer = fs.readFileSync('./inputDay08.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');
const forest = lines.map(e => e.split('').map(Number));


const isVisibleFromLeft = (tree, x, y, forest) => {
    if (x == 0) return true;
    for (let i = 0; i < x; i++) {
        const element = forest[y][i];
        if (element >= tree)
            return false;
    }
    return true;
}

const isVisibleFromRight = (tree, x, y, forest) => {
    if (x == forest[y].length - 1) return true;
    for (let i = x + 1; i < forest[y].length; i++) {
        const element = forest[y][i];
        if (element >= tree)
            return false;
    }
    return true;
}
const isVisibleFromTop = (tree, x, y, forest) => {
    if (y == 0) return true;
    for (let i = 0; i < y; i++) {
        const element = forest[i][x];
        if (element >= tree)
            return false;
    }
    return true;
}

const isVisibleFromBottom = (tree, x, y, forest) => {
    if (y == forest.length - 1) return true;
    for (let i = y + 1; i < forest.length; i++) {
        const element = forest[i][x];
        if (element >= tree)
            return false;
    }
    return true;
}


console.log(forest);
let nbVisible = 0;
for (let y = 0; y < forest.length; y++) {
    const line = forest[y];
    for (let x = 0; x < line.length; x++) {
        const tree = line[x];
        const isVisible = (
            isVisibleFromLeft(tree, x, y, forest) ||
            isVisibleFromTop(tree, x, y, forest) ||
            isVisibleFromRight(tree, x, y, forest) ||
            isVisibleFromBottom(tree, x, y, forest)
        )
        console.log("tree : " + tree + " visibility : " + isVisible);
        if (isVisible)
            nbVisible++;
    }
}

console.log(forest);
console.log(nbVisible);