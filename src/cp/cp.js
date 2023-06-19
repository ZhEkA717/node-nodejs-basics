import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { spawn } from 'child_process';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    // Write your code here
    spawn('node', [
        join(__dirname, 'files/script.js'),
        ...args
    ]).stdout.on('data', data => stdout.write(data));
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
