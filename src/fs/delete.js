import {unlink} from 'fs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const path = join(__dirname, 'files/fileToRemove.txt');

const remove = async () => {
    unlink(path, err => {
        if (err) throw new Error('FS operation failed');
        
        console.log('File was deleted!');
    });
};

await remove();