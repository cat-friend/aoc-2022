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
