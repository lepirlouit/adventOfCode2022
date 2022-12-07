const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay15.txt');
// const contentBuffer = fs.readFileSync('./inputDay15.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');