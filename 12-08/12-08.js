import { input, test, wtf } from './input.js';

function matrixMaker(input) {
    return input.split("\n").map(row => row.split("").map(treeHeight => parseInt(treeHeight)));
}

function visibleTreeFinder(input) {
    const matrix = matrixMaker(input);
    let numVis = 0;
    for (let i = 1; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[0].length - 1; j++) {
            const currHeight = matrix[i][j];
            const isVisible = Boolean(
                visNorth(matrix, i, j, currHeight) ||
                visWest(matrix, i, j, currHeight) ||
                visEast(matrix, i, j, currHeight) ||
                visSouth(matrix, i, j, currHeight)
            )
            numVis = isVisible ? numVis + 1 : numVis;
        }
    }
    numVis += (matrix.length + matrix[0].length - 2) * 2;
    return numVis;
}

function theMost(input) {
    const matrix = matrixMaker(input)
    let max = 0;
    for (let i = 1; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[0].length - 1; j++) {
            const currHeight = matrix[i][j];
            const currScenic = (visNorth(matrix, i, j, currHeight, false) *
                visWest(matrix, i, j, currHeight, false) *
                visEast(matrix, i, j, currHeight, false) *
                visSouth(matrix, i, j, currHeight, false));
            max = Math.max(max, currScenic);
        }
    }
    return max;
}

function visNorth(input, i, j, currHeight, part1 = true) {
    let numVis = 0;
    if (part1) {
        for (let row = 0; row < i; row++) {
            if (input[row][j] >= currHeight) return false;
        }
        return true;
    }
    else {
        if (i === 1) return 1;
        for (let row = i - 1; row >= 0; row--) {
            if (input[row][j] < currHeight) {
                numVis++
            }
            else {
                numVis++;
                break;
            }
        }
        return numVis;
    }
}

function visWest(input, i, j, currHeight, part1 = true) {
    let numVis = 0;
    if (part1) {
        for (let column = 0; column < j; column++) {
            if (input[i][column] >= currHeight) return false;
        }
        return true;
    }
    else {
        if (j === 1) return 1;
        for (let column = j - 1; column >= 0; column--) {
            if (input[i][column] < currHeight) {
                numVis++;
            }
            else {
                numVis++;
                break;
            }
        }
        return numVis;
    }
}

function visEast(input, i, j, currHeight, part1 = true) {
    let numVis = 0;
    if (part1) {
        for (let column = j + 1; column < input[0].length; column++) {
            if (input[i][column] >= currHeight) return false;
        }
        return true;
    }
    else {
        if (j === input[0].length - 2) return 1;
        for (let column = j + 1; column < input[0].length; column++) {
            if (input[i][column] < currHeight) {
                numVis++;
            }
            else {
                numVis++;
                break;
            }
        }
        return numVis;
    }
}

function visSouth(input, i, j, currHeight, part1 = true) {
    let numVis = 0;
    if (part1) {
        for (let row = i + 1; row < input.length; row++) {
            if (input[row][j] >= currHeight) return false;
        }
        return true;
    }
    else {
        if (i === input.length - 2) return 1;
        for (let row = i + 1; row < input.length; row++) {
            if (input[row][j] < currHeight) {
                numVis++
            }
            else {
                numVis++;
                break;
            }
        }
        return numVis;
    }
}

console.log(visibleTreeFinder(test));
console.log(`Test pass?: ${Boolean(visibleTreeFinder(test) === 21)}`);
console.log(visibleTreeFinder(input));
console.log(theMost(test));
console.log(`Test pass?: ${Boolean(theMost(test) === 8)}`);
console.log(theMost(input));
