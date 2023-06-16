import { createReadStream } from "fs";

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readableStream = createReadStream(join(__dirname,"files/fileToRead.txt"),"utf-8");


const read = async () => {
    let data = "";
    readableStream.on("data", (chunk) => {
        data += chunk;
    });

    readableStream.on("end", () => {
        console.log(data);
    });
};

await read();




