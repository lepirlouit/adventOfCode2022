const fs = require('fs');

const c = fs.readFileSync('./inputDay1.txt')

c.toString().split('\n\n').map(e => e.split('\n').map(e => Number(e))).map(e => e.reduce((acc, elt) => acc + elt)).sort((a, b) => b - a)