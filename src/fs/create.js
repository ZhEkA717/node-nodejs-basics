import { stat, writeFile } from 'fs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path = join(__dirname, 'files/fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
    stat(path, (err, stat) => {
        if (err == null) {
            throw new Error('FS operation failed');
        } else if (err.code === 'ENOENT') {
            writeFile(path, content, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('File was created!');
                }
            })
        } else {
            throw new Error('Some other error: ', err.code);
        }
    })
};

await create();