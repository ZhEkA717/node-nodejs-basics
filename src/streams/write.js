import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { stdin } from 'process'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const writeStream = createWriteStream(join(__dirname,"files/fileToWrite.txt"),"utf-8")


const write = async () => {
    console.log('Введите текст...')

    stdin.on("data",(data)=>{
        const myBuffer = Buffer.from(data,"utf-8");
        const str = myBuffer.toString();

        writeStream.write(str);
    });
};

await write();