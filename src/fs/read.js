import { readFile } from 'fs';

import {fileURLToPath} from 'url';
import {join,dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    readFile(join(__dirname, 'files/fileToRead.txt'), 'utf8', (err, data) => {
        err
            ? console.log('FS operation failed')
            : console.log(data);
    });
};

await read();
