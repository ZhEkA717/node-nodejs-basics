import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { createGzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const writeStream = createWriteStream(join(__dirname,"files/archive.gz"),"utf-8");
const readStream = createReadStream(join(__dirname,"files/fileToCompress.txt"),"utf-8");
const compressStream = createGzip();

const compress = async () => {
    readStream
        .pipe(compressStream)
        .pipe(writeStream);
};

await compress();
