import { createReadStream } from 'fs';
import { createHash } from 'crypto';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const hash = createHash('SHA256');
    hash.setEncoding('hex');

    const fd = createReadStream(join(__dirname, 'files/fileToCalculateHashFor.txt'))
        
    fd.on('end', () => {
            hash.end();
            console.log(hash.read());
        });
    fd.pipe(hash);
};

await calculateHash();