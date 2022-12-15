const fs = require('fs');
//const contentBuffer = fs.readFileSync('./testDay15.txt');
const contentBuffer = fs.readFileSync('./inputDay15.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

const manhatanDistance = (p1, p2) => Math.abs(p1.x-p2.x)+Math.abs(p1.y-p2.y);
const bss = lines.map(line => {
	const [match, sx, sy, bx, by] =line.match(/^Sensor at x=(\d*), y=(\d*): closest beacon is at x=(-?\d*), y=(\d*)/);
	return ({sensor:{x:Number(sx),y:Number(sy)},beacon:{x:Number(bx), y:Number(by)}});

}).map(e => ({...e, distance:manhatanDistance(e.sensor, e.beacon)}));

const xMin = bss.reduce((acc,elt)=>Math.min(acc, elt.sensor.x-elt.distance) , 5000)
const yMin = bss.reduce((acc,elt)=>Math.min(acc, elt.sensor.y) , 5000000000)
const xMax = bss.reduce((acc,elt)=>Math.max(acc, elt.sensor.x+elt.distance) , 0)
const yMax = bss.reduce((acc,elt)=>Math.max(acc, elt.sensor.y) , 0)
console.log(xMin, xMax, yMin, yMax);
const simulateLine = (y) => {
	let notPresent=0;
	let possible=0;
	for (let x = xMin; x< xMax; x++){
		if (bss.find(bs => manhatanDistance({x,y}, bs.sensor) <= bs.distance))
			notPresent++;
		else
			possible++;
		if (notPresent && possible)
			return x;
	}


	return 0;
}

//console.table(simulateLine(10));
console.table(simulateLine(2000000));
for (let y=yMin;y<yMax;y++){
	const x = simulateLine(y);
	if (x)
		console.log({x,y});

}
