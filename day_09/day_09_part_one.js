const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay09.txt');
// const contentBuffer = fs.readFileSync('./inputDay09.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');