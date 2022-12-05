import {exec} from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);
async function write() {
    for (let i = 1; i < 26; i++) {
        const num = i < 10 ? '09' : i;
        await execPromise(`touch 12-${num}.js`);
    }
}

await write();

async function mkdirAndMove() {
    for (let i = 1; i <= 25; i++) {
        const num = i < 10 ? '09' : i;
        await execPromise(`mkdir 12-${num}`);
        await execPromise(`mv `)
    }
}

async function move() {
    for (let )
}
