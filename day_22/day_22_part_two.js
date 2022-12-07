const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay22.txt');
// const contentBuffer = fs.readFileSync('./inputDay22.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');