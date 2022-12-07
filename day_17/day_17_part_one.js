const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay17.txt');
// const contentBuffer = fs.readFileSync('./inputDay17.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');