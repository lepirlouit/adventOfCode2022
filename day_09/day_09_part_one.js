const fs = require('fs');
// const contentBuffer = fs.readFileSync('./testDay09.txt');
const contentBuffer = fs.readFileSync('./inputDay09.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');


const head = {
    x: 0,
    y: 0
}
const tail = {
    x: 0,
    y: 0
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
        // move head
        head.x = head.x + direction.x;
        head.y = head.y + direction.y;

        //move tail
        const distance = computeDistance(head, tail);
        if (distance >= 2) {
            if (head.x === tail.x) {
                // move vertically
                if (head.y > tail.y) {
                    // move to the bottom
                    tail.y = tail.y + 1;
                } else if (head.y < tail.y) {
                    // move to the up
                    tail.y = tail.y - 1;
                }

            } else if (head.y === tail.y) {
                // move horizontally
                if (head.x > tail.x) {
                    // move to the right
                    tail.x = tail.x + 1;
                } else if (head.x < tail.x) {
                    // move to the left
                    tail.x = tail.x - 1;
                }
            } else {
                // const vDistance = Math.abs(head.y - tail.y);
                // const hDistance = Math.abs(head.x - tail.x);
                if (head.x > tail.x && head.y > tail.y) {
                    // move top-right
                    tail.x = tail.x + 1;
                    tail.y = tail.y + 1;
                } else if (head.x > tail.x && head.y < tail.y) {
                    // move bottom-right
                    tail.x = tail.x + 1;
                    tail.y = tail.y - 1;
                } else if (head.x < tail.x && head.y < tail.y) {
                    // move bottom-left
                    tail.x = tail.x - 1;
                    tail.y = tail.y - 1;
                } else if (head.x < tail.x && head.y > tail.y) {
                    // move top-left
                    tail.x = tail.x - 1;
                    tail.y = tail.y + 1;
                }
            }
            addCloneIfNotExist(visited, tail);
        }
        console.log({ d: move.d, head, tail });
    }
}

console.log(moves);
console.log(visited);

console.log(visited.length);

console.log(computeDistance({ x: 1, y: 4 }, { x: 3, y: 4 }));