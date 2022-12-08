const fs = require('fs');
// const contentBuffer = fs.readFileSync('./testDay08.txt');
const contentBuffer = fs.readFileSync('./inputDay08.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');
const forest = lines.map(e => e.split('').map(Number));
const scenicScores = [];

const nbVisibleToLeft = (tree, x, y, forest) => {
    if (x == 0) return 0;
    let nbVisible = 1;
    for (let i = x - 1; i >= 0; i--) {
        const element = forest[y][i];
        console.log("with i = " + i + "  -- is " + element + " >= " + tree);
        if (element >= tree || i === 0)
            return nbVisible;
        nbVisible++;
    }
    return nbVisible;
}

const nbVisibleToRight = (tree, x, y, forest) => {
    if (x == forest[y].length - 1) return 0;
    let nbVisible = 1;
    for (let i = x + 1; i < forest[y].length; i++) {
        const element = forest[y][i];
        console.log("with i = " + i + "  -- is " + element + " >= " + tree);
        if (element >= tree || i === forest[y].length - 1)
            return nbVisible;
        nbVisible++;
    }
    return nbVisible;
}
const nbVisibleToTop = (tree, x, y, forest) => {
    if (y == 0) return 0;
    let nbVisible = 1;
    for (let i = y - 1; i >= 0; i--) {
        const element = forest[i][x];
        console.log("with i = " + i + " -- is " + element + " >= " + tree);
        if (element >= tree || i === 0)
            return nbVisible;
        nbVisible++;
    }
    return nbVisible;
}

const nbVisibleToBottom = (tree, x, y, forest) => {
    if (y == forest.length - 1) return 0;
    let nbVisible = 1;
    for (let i = y + 1; i < forest.length; i++) {
        const element = forest[i][x];
        console.log("with i = " + i + "  -- is " + element + " >= " + tree);
        if (element >= tree || i === forest.length - 1)
            return nbVisible;
        nbVisible++;
    }
    return nbVisible;
}

console.log(nbVisibleToBottom(5, 2, 1, forest));
// const nbVisible = nbVisibleToBottom(5, 2, 3, forest);
console.table(forest);
// let nbVisible = 0;
const bestSpot = {
    x: 0,
    y: 0,
    tree: 0,
}
for (let y = 0; y < forest.length; y++) {
    scenicScores.push([]);
    const line = forest[y];
    for (let x = 0; x < line.length; x++) {
        const tree = line[x];
        const scenicScore = (
            nbVisibleToLeft(tree, x, y, forest) *
            nbVisibleToRight(tree, x, y, forest) *
            nbVisibleToBottom(tree, x, y, forest) *
            nbVisibleToTop(tree, x, y, forest)
        )
        scenicScores[y].push(scenicScore);
        if (scenicScore > bestSpot.tree) {
            bestSpot.x = x;
            bestSpot.y = y;
            bestSpot.tree = scenicScore;
        }

        // console.log("tree : " + tree + " visibility : " + isVisible);

    }
}

console.table(scenicScores);
console.table(bestSpot);
