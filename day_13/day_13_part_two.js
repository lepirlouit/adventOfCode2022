const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay13.txt');
// const contentBuffer = fs.readFileSync('./inputDay13.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');