import { stdin, stdout } from 'process'
import { Transform } from 'stream';

const transform = async () => {
    console.log('Введите текст...')
    stdin.on("data",(data)=>{
        const myBuffer = Buffer.from(data,"utf-8");
        const str = myBuffer.toString();

        
        stdout.write(str.split('').reverse().join(''));
    })
};

await transform();