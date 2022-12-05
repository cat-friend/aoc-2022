import { input } from './input.js';

function maxCalories(input, options) {
    const caloricArray = input.split("\n");
    let currCalories = 0;
    const allCalories = [];

    for (let i = 0; i < caloricArray.length + 1; i++) {
        let calories = caloricArray[i];
        if (calories) {
            calories = parseInt(calories);
            currCalories += calories;
        }
        else {
            allCalories.push(currCalories);
            currCalories = 0;
        }
    }
    allCalories.sort((a, b) => b - a);
    const min = allCalories[2];
    const mid = allCalories[1];
    const max = allCalories[0]
    const answer = options === 'topThree' ? min + mid + max : max;
    return answer;
}

console.log(maxCalories(input, 'max'));
console.log(maxCalories(input, 'topThree'))
