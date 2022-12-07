const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay08.txt');
// const contentBuffer = fs.readFileSync('./inputDay08.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');