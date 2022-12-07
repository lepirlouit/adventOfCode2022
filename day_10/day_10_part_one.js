const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay10.txt');
// const contentBuffer = fs.readFileSync('./inputDay10.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');