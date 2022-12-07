const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay18.txt');
// const contentBuffer = fs.readFileSync('./inputDay18.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');