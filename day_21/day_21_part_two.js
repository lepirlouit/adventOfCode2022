const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay21.txt');
// const contentBuffer = fs.readFileSync('./inputDay21.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');