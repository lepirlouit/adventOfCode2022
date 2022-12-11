const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay11.txt');
// const contentBuffer = fs.readFileSync('./inputDay11.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

const monkeys = [
    {
        items: [79, 98],
        operation: (x) => x * 19,
        test: (x) => (!(x % 23)) ? 2 : 3,
        inspectedItems: 0
    },
    {
        items: [54, 65, 75, 74],
        operation: (x) => x + 6,
        test: (x) => (!(x % 19)) ? 2 : 0,
        inspectedItems: 0
    },
    {
        items: [79, 60, 97],
        operation: (x) => x * x,
        test: (x) => (!(x % 13)) ? 1 : 3,
        inspectedItems: 0
    },
    {
        items: [74],
        operation: (x) => x + 3,
        test: (x) => (!(x % 17)) ? 0 : 1,
        inspectedItems: 0
    },
];

for (let i = 0; i < 20; i++) {
    for (const [monkeyIndex, monkey] of monkeys.entries()) {
        const { items, operation, test } = monkey;
        console.log("Monkey", monkeyIndex)
        while (items.length) {
            monkey.inspectedItems++;
            const item = items.shift();
            console.log("  Monkey inspects an item with a worry level of", item);
            const operated = operation(item);
            console.log(`    Worry level is operated to ${operated}.`);
            const newVal = Math.floor(operated / 3);
            console.log(`    Monkey gets bored with item. Worry level is divided by 3 to ${newVal}.`);
            console.log(`    Item with worry level ${newVal} is thrown to monkey ${test(newVal)}.`)
            monkeys[test(newVal)].items.push(newVal);
        }
    }
    console.log(`After round ${i + 1}`);
    for (const [monkeyIndex, { items, operation, test }] of monkeys.entries()) {
        console.log(`Monkey ${monkeyIndex}: `, items.join(', '));
    }
}

for (const [monkeyIndex, monkey] of monkeys.entries()) {
    console.log(`Monkey ${monkeyIndex} inspected items ${monkey.inspectedItems} times.`);

}