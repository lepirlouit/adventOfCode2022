const fs = require('fs');
const contentBuffer = fs.readFileSync('./testDay11.txt');
// const contentBuffer = fs.readFileSync('./inputDay11.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');