const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay24.txt');
// const contentBuffer = fs.readFileSync('./inputDay24.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');