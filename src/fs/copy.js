import {
    mkdir,
    readdir,
    copyFile,
    stat,
    access
} from 'fs';

import {
    fileURLToPath
} from 'url';
import {
    join,
    dirname
} from 'path';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const isCopied = () => {
    return new Promise((resolve) => {
        access(join(__dirname, 'files-copy'), err => {
            resolve(err);
        })
    });
}

const createCopyFolder = () => {
    return new Promise((resolve) => {
        mkdir(join(__dirname, 'files-copy'),
            err => {
                err
                    ? console.log('FS operation failed')
                    : console.log("folder 'files-copy' was created");
                resolve();
            });
    });
}

const readFolder = () => {
    return new Promise((resolve) => {
        readdir(join(__dirname, 'files'),
            (err, files) => {
                if (err) throw err;
                resolve(files);
            })
    });
}

const copy = async () => {
    if (await isCopied()) {
        await createCopyFolder();

        const files = await readFolder();

        files.forEach((file) => {
            copyFile(
                join(__dirname, "files", file),
                join(__dirname, "files-copy", file),
                (err) => {
                    if (err) throw err;
                    console.log(`file "${file}"  was copied`);
                }
            )
        });
    } else {
        console.error('FS operation failed');
    }

}


await copy();
