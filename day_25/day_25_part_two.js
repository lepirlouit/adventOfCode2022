const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay25.txt');
// const contentBuffer = fs.readFileSync('./inputDay25.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');