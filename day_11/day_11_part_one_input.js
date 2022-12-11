const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay11.txt');
// const contentBuffer = fs.readFileSync('./inputDay11.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

const monkeys = [
    {
        items: [83, 97, 95, 67],
        operation: (x) => x * 19,
        test: (x) => (!(x % 17)) ? 2 : 7,
        inspectedItems: 0
    },
    {
        items: [71, 70, 79, 88, 56, 70],
        operation: (x) => x + 2,
        test: (x) => (!(x % 19)) ? 7 : 0,
        inspectedItems: 0
    },
    {
        items: [98, 51, 51, 63, 80, 85, 84, 95],
        operation: (x) => x + 7,
        test: (x) => (!(x % 7)) ? 4 : 3,
        inspectedItems: 0
    },
    {
        items: [77, 90, 82, 80, 79],
        operation: (x) => x + 1,
        test: (x) => (!(x % 11)) ? 6 : 4,
        inspectedItems: 0
    },
    {
        items: [68],
        operation: (x) => x * 5,
        test: (x) => (!(x % 13)) ? 6 : 5,
        inspectedItems: 0
    },
    {
        items: [60, 94],
        operation: (x) => x + 5,
        test: (x) => (!(x % 3)) ? 1 : 0,
        inspectedItems: 0
    },
    {
        items: [81, 51, 85],
        operation: (x) => x * x,
        test: (x) => (!(x % 5)) ? 5 : 1,
        inspectedItems: 0
    },
    {
        items: [98, 81, 63, 65, 84, 71, 84],
        operation: (x) => x + 3,
        test: (x) => (!(x % 2)) ? 2 : 3,
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