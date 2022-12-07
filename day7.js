const fs = require('fs');
const contentBuffer = fs.readFileSync('./day7Test.txt');
//const contentBuffer = fs.readFileSync('./day7Input.txt');
const content = contentBuffer.toString();
const lines = content.split('\n');

const structure = {files:[]};
let currentDir = '';
let inLs = false;


const addFile  = (folder, file) => {
	const subFolders = folder.split('/');
	subFolders.pop(); //remove last
	subFolders.shift(); //remove last
	let structureFolder = structure;
//console.log("structureFolder", structureFolder);
	while(subFolders.length)
		structureFolder = structureFolder[subFolders.shift()]
//console.log("structureFolder", structureFolder);
	structureFolder.files.push(file);
}

const addFolder  = (folder, dir) => {
	const subFolders = folder.split('/');
	subFolders.pop(); //remove last
	subFolders.shift(); //remove last
	let structureFolder = structure;
//console.log("structureFolder", structureFolder);
	while(subFolders.length)
		structureFolder = structureFolder[subFolders.shift()]
//console.log("structureFolder", structureFolder);
	structureFolder[dir]={files: []};
}


for (const line of lines) {
	const matchCd = line.match(/^\$ cd (.*)/);
	const matchLs = line.match(/^\$ ls(.*)/);
	const matchFile = line.match(/^(\d*) (.*)/);
	const matchDir = line.match(/^dir (.*)/);
	if (matchCd){
		inLs = false;
		const folder =  matchCd[1];
		if (folder.match(/^\//))
			currentDir = folder;
		else if (folder.match(/\.\./)){
			const folders = currentDir.split('/');
			folders.pop();
			folders.pop();
			currentDir = folders.join('/') + "/";
		} else {
			currentDir = currentDir + folder + "/";
		}
	// console.log("Change to " + matchCd[1] + " current : " + currentDir)
	} else if (matchLs){
		inLs = true;
	} else if (matchFile) {
		const [match, size, name] = matchFile;
//		console.log({currentDir, size, name});
		addFile(currentDir, Number(size));
	} else if (matchDir) {
		const dir = matchDir[1];
		addFolder(currentDir, dir);
//		console.log({dir});
	} else {
		console.log("Unsupported line");
	}
}

console.log(JSON.stringify(structure, null, 2));