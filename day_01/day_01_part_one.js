const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay01.txt');
// const contentBuffer = fs.readFileSync('./inputDay01.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

content.split('\n\n').map(e => e.split('\n').map(e => Number(e))).map(e => e.reduce((acc, elt) => acc + elt)).sort((a, b) => b - a)