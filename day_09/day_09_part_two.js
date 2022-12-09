const fs = require('fs');
// const contentBuffer = fs.readFileSync('./testDay09.txt');
// const contentBuffer = fs.readFileSync('./test2Day09.txt');
const contentBuffer = fs.readFileSync('./inputDay09.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');




const rope = Array.from({ length: 10 }, () => ({ x: 0, y: 0 }));
console.log({ rope });
const head = rope[0];
const tail = rope[rope.length - 1];

const moveKnopts = (k1, k2) => {
    //move tail
    const distance = computeDistance(k1, k2);
    if (distance >= 2) {
        if (k1.x === k2.x) {
            // move vertically
            if (k1.y > k2.y) {
                // move to the bottom
                k2.y = k2.y + 1;
            } else if (k1.y < k2.y) {
                // move to the up
                k2.y = k2.y - 1;
            }

        } else if (k1.y === k2.y) {
            // move horizontally
            if (k1.x > k2.x) {
                // move to the right
                k2.x = k2.x + 1;
            } else if (k1.x < k2.x) {
                // move to the left
                k2.x = k2.x - 1;
            }
        } else {
            if (k1.x > k2.x && k1.y > k2.y) {
                // move top-right
                k2.x = k2.x + 1;
                k2.y = k2.y + 1;
            } else if (k1.x > k2.x && k1.y < k2.y) {
                // move bottom-right
                k2.x = k2.x + 1;
                k2.y = k2.y - 1;
            } else if (k1.x < k2.x && k1.y < k2.y) {
                // move bottom-left
                k2.x = k2.x - 1;
                k2.y = k2.y - 1;
            } else if (k1.x < k2.x && k1.y > k2.y) {
                // move top-left
                k2.x = k2.x - 1;
                k2.y = k2.y + 1;
            }
        }
    }
}


const moveAllKnopts = (direction) => {
    // move head
    head.x = head.x + direction.x;
    head.y = head.y + direction.y;
    for (let i = 1; i < rope.length; i++) {
        const knop = rope[i - 1];
        const nextKnop = rope[i];
        moveKnopts(knop, nextKnop);
    }

}

const visited = [];

const addCloneIfNotExist = (array, point) => {
    if (!array.find(e => e.x === point.x && e.y === point.y))
        array.push({ x: point.x, y: point.y });
}

const moves = lines.map(e => {
    const [d, q] = e.split(' ');
    return ({ d, q: Number(q) })
});

const computeDistance = (p1, p2) => Math.sqrt(((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2));
addCloneIfNotExist(visited, tail);
for (const move of moves) {
    const direction =
        move.d === 'R' ? { x: 1, y: 0 } :
            move.d === 'L' ? { x: -1, y: 0 } :
                move.d === 'U' ? { x: 0, y: 1 } :
                    move.d === 'D' ? { x: 0, y: -1 } : { x: 0, y: 0 }
    for (let i = 0; i < move.q; i++) {
        moveAllKnopts(direction);
        addCloneIfNotExist(visited, tail);
        // console.log({ d: move.d, rope });
    }
}

// console.log(moves);
console.log(visited);

console.log(visited.length);

// console.log(computeDistance({ x: 1, y: 4 }, { x: 3, y: 4 }));