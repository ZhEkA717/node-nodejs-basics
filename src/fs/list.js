import { readdir } from 'fs';

import {fileURLToPath} from 'url';
import {join,dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const list = async () => {
    readdir(join(__dirname, 'files'),
            (err, files) => {
                if (err) throw new Error('FS operation failed')
                
                console.log(files);
            })
};

await list();