const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay23.txt');
// const contentBuffer = fs.readFileSync('./inputDay23.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');