import { stdin, stdout } from 'process'
import { Transform, pipeline } from 'stream';

const transform = async () => {

    const transformFromFile = new Transform({
        transform(chunk, encoding, callback) {
            callback(
                null,
                chunk.toString().split('').reverse().join(''),
            );
        }
    })

    pipeline(stdin, transformFromFile, stdout);
};

await transform();