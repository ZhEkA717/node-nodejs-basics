import { rename as renameFile } from 'fs'; 

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    renameFile(
        join(__dirname,'files/wrongFilename.txt'),
        join(__dirname,'files/properFilename.md'),
        err => {
        if (err) throw new Error('FS operation failed');
        
        console.log('File was renamed!');
    });
};

await rename();