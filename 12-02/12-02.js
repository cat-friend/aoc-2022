import { input } from 'input';

function gameFAQs(input, options = 'total') {
    let score = 0;
    const rounds = input.split('\n');
    for (const round of rounds) {
        const opponent = round[0];
        const player = round[2];
        score = options === 'total' ? score + roundScore(opponent, player) : score + roundOutcome(opponent, player);
    }
    return score;
}

/**
 * values:
 *   rock: 1 - A, X
 *   paper: 2 - B, Y
 *   scisorrs: 3 - C, Z
 *
 * outcomes:
 *  lose: 0
 *  draw: 3
 *  win: 6
 *
 * score = shape + outcome
 * outcome = determined by opponent's shape + shape i play
 * if opponent = rock
 *  win = paper
 *  lose = scissors
 *  draw = rock
 */

function roundScore(opponent, player) {
    const rules = {
        A: {
            X: {
                value: 1,
                outcome: 3
            },
            Y: {
                value: 2,
                outcome: 6
            },
            Z: {
                value: 3,
                outcome: 0
            }
        },
        B: {
            X: {
                value: 1,
                outcome: 0
            },
            Y: {
                value: 2,
                outcome: 3
            },
            Z: {
                value: 3,
                outcome: 6
            }
        },
        C: {
            X: {
                value: 1,
                outcome: 6
            },
            Y: {
                value: 2,
                outcome: 0
            },
            Z: {
                value: 3,
                outcome: 3
            }
        }
    }
    const score = rules[opponent][player].value + rules[opponent][player].outcome
    return score;
}
/**
 * X: lose,
 * Y: draw
 * Z: win
 */

function roundOutcome(opponent, outcome) {
    const outcomeValue = {
        X: {
            value: 0,
            moves: {
                A: 3,
                B: 1,
                C: 2,
            }
        },
        Y: {
            value: 3,
            moves: {
                A: 1,
                B: 2,
                C: 3,
            }
        },
        Z: {
            value: 6,
            moves: {
                A: 2,
                B: 3,
                C: 1,
            }
        },
    }

    const score = outcomeValue[outcome].value + outcomeValue[outcome].moves[opponent];
    return score;
}

console.log(gameFAQs(input));
console.log(gameFAQs(input, 'strat'))
// 10595, 9541
