const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay20.txt');
// const contentBuffer = fs.readFileSync('./inputDay20.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');