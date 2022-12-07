const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay07.txt');
// const contentBuffer = fs.readFileSync('./inputDay07.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');