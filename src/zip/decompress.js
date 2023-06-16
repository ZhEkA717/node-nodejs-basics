import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readStream = createReadStream(join(__dirname,"files/archive.gz"));

const writeStream = createWriteStream(join(__dirname,"files/fileToDecompress.txt"));

const decompressStream = createGunzip();

const decompress = async () => {    
    pipeline(readStream, decompressStream, writeStream, (err) => {
        if (err) {
            console.error('An error ocurred: ', err);
            process.exitCode = 1;  
        } else {
            console.log('Archive decompressed');
        }
    });
};

await decompress();
