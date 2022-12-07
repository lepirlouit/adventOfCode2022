const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay16.txt');
// const contentBuffer = fs.readFileSync('./inputDay16.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');