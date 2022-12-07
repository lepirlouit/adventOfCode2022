const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay19.txt');
// const contentBuffer = fs.readFileSync('./inputDay19.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');