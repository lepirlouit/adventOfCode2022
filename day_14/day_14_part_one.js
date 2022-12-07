const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay14.txt');
// const contentBuffer = fs.readFileSync('./inputDay14.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');