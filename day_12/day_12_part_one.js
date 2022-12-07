const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay12.txt');
// const contentBuffer = fs.readFileSync('./inputDay12.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');