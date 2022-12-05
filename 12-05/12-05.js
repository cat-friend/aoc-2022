import { input } from './input.js';
import { test } from './input.js';

function cargo(input, part2 = false) {
    const { crateArray, moves } = constructCratesAndMoves(input);
    console.log('crateArray', crateArray);
    for (const move of moves) {
        const { quantity, source, destination } = move;
        const cratesMoved = crateArray[source].splice(quantity * -1);
        crateArray[destination] = part2 ? [...crateArray[destination], ...cratesMoved] : [...crateArray[destination], ...cratesMoved.reverse()]
    }
    const topCrates = [];
    for (const column of crateArray) {
        if (column.length) {
            topCrates.push(column[column.length - 1])
        }
        else {
            topCrates.push(" ");
        }
    }
    console.log('final crateArray', crateArray);
    return topCrates.join("");
};

function constructCratesAndMoves(input) {
    const inputArray = input.split("\n");
    const { endNum, totalNumColumns, movesRow } = crateFinder(inputArray);
    const crates = inputArray.slice(0, endNum);
    const crateArray = crateArrayMaker(totalNumColumns);
    for (const row of crates) {
        let rowArray = row.split("");
        let spaceCount = 0;
        let columnCount = 0;
        while (rowArray.length) {
            const currChar = rowArray.shift();
            if (currChar === "]" || currChar === "[") {
                continue;
            }
            else if (currChar === " ") {
                spaceCount++
            }
            else {
                columnCount += Math.floor(spaceCount / 4);
                crateArray[columnCount] = [currChar, ...crateArray[columnCount]]
                spaceCount = 0;
                columnCount++
            }
        }
    }
    const moves = findMoves(inputArray, movesRow);
    return {
        crateArray,
        moves
    };
};

function crateFinder(allCrates) {
    let endNum = 0;
    let cratesRow;
    let movesRow;
    for (let i = 0; i < allCrates.length; i++) {
        if (allCrates[i][1] === "1") {
            cratesRow = i;
            continue;
        }
        if (allCrates[i][0] === "m") {
            movesRow = i;
            endNum = i - 2;
            break;
        }
    }
    const colRow = allCrates.slice(cratesRow, cratesRow + 1)[0].trim();
    const totalNumColumns = parseInt(colRow[colRow.length - 1]);
    return {
        movesRow,
        endNum,
        totalNumColumns
    }
}

function crateArrayMaker(totalNumColumns) {
    return new Array(totalNumColumns).fill([]);
}


// i1 is how many crates
// i3 is from where
// i5 is destination
function findMoves(input, movesRow) {
    const moves = [];
    const rawMoves = input.slice(movesRow).map(ele => ele.split(" "));
    for (const instruction of rawMoves) {
        moves.push({
            quantity: parseInt(instruction[1]),
            source: parseInt(instruction[3]) - 1,
            destination: parseInt(instruction[5]) - 1,
        })
    }
    return moves;
}

console.log(cargo(test)); // CMZ
console.log(cargo(input));
console.log(cargo(test, true)); // MCD
console.log(cargo(input, true));
