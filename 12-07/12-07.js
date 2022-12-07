import { input, test } from './input.js';

function dirSizeFinder(input, part1 = true) {

}

function dirGraph(input) {

}

class Directory {
    constructor() {
        this.root = undefined;
    }

    get over1000() {

    }
}

class dirNode {
    constructor({ dirName, size }) {
        this.dirName = dirName;
        this.size = size;
        this.children;
        this.parent;
    }
}
/**
 * {dirE: {
 * parent:
 * }}
 */
function dirMapMaker(info) {
    const directory = [];
    const terminalOutput = info.split("\n");
    let size = 0;
    let dirName;
    let currNode;
    let children;
    let i = 0;
    for (const line of terminalOutput) {
        const lineInfo = lineParser(line);
        switch (lineInfo.type) {
            case 'dirName':
                size = 0;
                dirName = { lineInfo };
                currNode = new dirNode({ dirName, size });
                directory.push(currNode);
                break;
            case 'file':
                currNode.size += line.size;
                break;
            default:
                break;
        }
    }

}

function lineParser(line) {
    const nums = "0123456789";
    if (line.startsWith("$ l")) {
        return {
            type: "ls"
        }
    }
    if (line === "$ cd ..") {
        const dirName = line.split(" ").pop();
        return {
            type: "moveUp",
            dirName,
        }
    }
    if (nums.includes(line[0])) {
        const [size, fileName] = line.split(" ");
        return {
            type: "file",
            size,
            fileName
        }
    }
    if (line.startsWith("dir")) {
        const [cmd, dirName] = line.split(" ");
        return {
            type: "child",
            dirName,
        }
    }
    return { type: "noAction" }
}
