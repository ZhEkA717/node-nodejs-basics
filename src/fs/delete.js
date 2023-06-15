import {unlink} from 'fs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const path = join(__dirname, 'files/fileToRemove.txt');

const remove = async () => {
    unlink(path, (err) => {
        err
            ? console.log('FS operation failed')
            : console.log('File deleted successfully!');
    });
};

await remove();