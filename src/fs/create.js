import {
    writeFile,
    readFile
} from 'fs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path = join(__dirname, 'files/testFile.txt');

const create = async () => {

    readFile(path, 'utf8', async (err, data) => {

        data
            ?
            console.log('FS operation failed') :
            writeFile(
                path,
                "I am fresh and young",
                (err) => {
                    if (err) throw err;
                    console.log('File was created');
                });
    })
};

await create();