import { input, test } from './input.js';

function commsStart(input, partOne = true) {
    if (partOne) {
        for (let i = 0; i < input.length - 4; i++) {
            const segment = input.slice(i, i + 4);
            console.log('segment', segment);
            const segmentSet = new Set(segment.split(""));
            if (segmentSet.size === 4) {
                return i + 4
            }
        }
    }
    else {
        for (let i = 0; i < input.length - 14; i++) {
            const segment = input.slice(i, i + 14);
            const segmentSet = new Set(segment.split(""));
            if (segmentSet.size === 14) {
                return i + 14
            }
        }
    }
}

// console.log(commsStart(input));
// console.log(commsStart(test));
console.log(commsStart(input, false));
// console.log(commsStart(test, false));
