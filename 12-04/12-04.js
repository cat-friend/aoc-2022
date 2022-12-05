import { input } from 'input';

const assignments = input.split("\n").map(ele => ele.split(","));

function overlap(pairs, part2 = false) {
    let numOverlaps = 0;
    for (const pair of pairs) {
        const pairArray = pair.map(ele => ele.split("-"))
        const elfOne = pairArray[0].map(ele => parseInt(ele));
        const elfTwo = pairArray[1].map(ele => parseInt(ele));
        const [elfOneLower, elfOneHigher, elfTwoLower, elfTwoHigher] = [...elfOne, ...elfTwo];
        if (!part2) {
            if (fullyContained(elfOneLower, elfOneHigher, elfTwoLower, elfTwoHigher)) {
                numOverlaps++
            }
        }
        else {
            if (partialOverlap(elfOneLower, elfOneHigher, elfTwoLower, elfTwoHigher)) {
                numOverlaps++
            }
        }
    }
    return numOverlaps;
}

function fullyContained(elfOneLower, elfOneHigher, elfTwoLower, elfTwoHigher) {
    if (elfOneLower <= elfTwoLower && elfOneHigher >= elfTwoHigher) {
        return true;
    }
    else if (elfTwoLower <= elfOneLower && elfTwoHigher >= elfOneHigher) {
        return true;
    }
}

function partialOverlap(elfOneLower, elfOneHigher, elfTwoLower, elfTwoHigher) {

    if (elfOneLower >= elfTwoLower && elfOneLower <= elfTwoHigher) {
        return true;
    }
    if (elfOneHigher >= elfTwoLower && elfOneLower <= elfTwoHigher) {
        return true;
    }
    if (elfTwoLower >= elfOneLower && elfTwoLower <= elfOneHigher) {
        return true;
    }
    if (elfTwoHigher >= elfOneLower && elfTwoHigher <= elfOneHigher) {
        return true;
    }
}
console.log(overlap(assignments));
console.log(overlap(assignments, true));
