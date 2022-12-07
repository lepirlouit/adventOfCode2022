const fs = require('fs');
// const contentBuffer = fs.readFileSync('./day7Test.txt');
const contentBuffer = fs.readFileSync('./day7Input.txt');
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

let totalSize = 0;
const getFolderSize = (folder, path) => {
	const entries = Object.entries(folder);
	let size = 0;
	for (const [key, value] of entries) {
		if (key === "files")
			size += value.reduce((acc, elt) => acc + elt, 0);
		else
			size += getFolderSize(folder[key], [...path, key])
	}
	folder.size = size;
	folder.path = path.join("/") + "/";
	if (size < 100000) {
		console.log({ size, path: folder.path });
		totalSize += size;
	}

	return size;
}

getFolderSize(structure, [""]);

const freeSize = 70000000 - structure.size;
const sizeToFree = 30000000 - freeSize;

let folderToBeRemoved = structure;
const findSmallest = (folder) => {
	const entries = Object.entries(folder);
	for (const [key, value] of entries) {
		if (folder.size > sizeToFree && folderToBeRemoved.size > folder.size) {
			folderToBeRemoved = folder;
		}
		if (["files", "size", "path"].includes(key))
			continue;
		findSmallest(folder[key]);
	}
}

findSmallest(structure);

console.log({ totalSize, freeSize, sizeToFree, folderToBeRemoved: { size: folderToBeRemoved.size, path: folderToBeRemoved.path } });
// console.log(JSON.stringify(structure, null, 2));