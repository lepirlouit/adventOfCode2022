const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay01.txt');
// const contentBuffer = fs.readFileSync('./inputDay01.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');