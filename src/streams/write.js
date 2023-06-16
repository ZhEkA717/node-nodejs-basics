import { appendFile } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { stdin } from 'process'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    console.log('Введите текст...')

    stdin.on("data",(data)=>{
        const myBuffer = Buffer.from(data,"utf-8");
        const str = myBuffer.toString();

        appendFile(
            join(__dirname,'files/fileToWrite.txt'),
            str,
            err=>{
                if (err) throw err;
                console.log("Файл был дополнен..");
            }
        )
    });
};

await write();