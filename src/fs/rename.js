import { rename as renameFile } from 'fs'; 

import {
    fileURLToPath
} from 'url';
import {
    join,
    dirname
} from 'path';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    renameFile(
        join(__dirname,'files/wrongFilename.txt'),
        join(__dirname,'files/properFilename.md'),
        (err) => {
        err
            ? console.log('FS operation failed')
            : console.log('File renamed successfully!');

    });
};

await rename();