import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const workers = [];
    
    const worker = join(__dirname, 'worker.js');

    Array.from(Array(cpus().length).keys())
        .forEach((item, i) => {
            workers.push(
                new Worker(worker, { workerData: 10 + i })
            );
        });

    Promise.all(
        workers.map(worker => new Promise(res => {
            worker.on('message', (msg) => res({
                status: 'resolved',
                data: msg,
            }));

            worker.on('error', () => res({
                status: 'error',
                data: null,
            }))
        }))
    ).then((result) => { console.log(result); });
};

await performCalculations();