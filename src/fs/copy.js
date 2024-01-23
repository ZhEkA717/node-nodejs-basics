import { access, cp } from 'fs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const copy = async () => {
    access(join(__dirname, 'files-copy'), err => {
        if (!err) {
            throw new Error('FS operation failed');
        }

        cp(join(__dirname, 'files'), join(__dirname, 'files-copy'),
            { recursive: true}, err => {
                if (!err) {
                    console.log('Folder was copied!');
                } else {
                    console.log(err);
                }
            }
        )
    })
}

await copy();