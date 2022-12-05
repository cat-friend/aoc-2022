import { input } from 'input';

const rucksacks = input.split("\n");

const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function dayThree(rucksacks) {
    let priorityScore = 0;
    for (const rucksack of rucksacks) {
        const commonItems = new Set();
        const firstHalf = rucksack.slice(0, rucksack.length / 2);
        const secondHalf = rucksack.slice(rucksack.length / 2);
        for (const object of secondHalf) {
            if (firstHalf.indexOf(object) !== -1 && !commonItems.has(object)) {
                commonItems.add(object);
                priorityScore += priorities.indexOf(object) + 1;
            }
        }
    }
    return priorityScore;
}

function dayThreePATRTOO(rucksacks) {
    let priorityScore = 0;
    for (let i = 0; i < rucksacks.length - 2; i += 3) {
        const first = rucksacks[i];
        const second = rucksacks[i + 1];
        const third = rucksacks[i + 2];
        for (const object of first) {
            if (second.indexOf(object) !== -1 && third.indexOf(object) !== -1) {
                priorityScore += priorities.indexOf(object) + 1;
                break;
            }
        }
    }
    return priorityScore
}

console.log(dayThree(rucksacks));
console.log(dayThreePATRTOO(rucksacks));
